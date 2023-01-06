// this file isn't ready but will eventually setup the project for you through a cli
import {
  join,
  resolve,
} from "https://deno.land/std@0.150.0/path/mod.ts";
import { parse } from "https://deno.land/std@0.150.0/flags/mod.ts";
import { gte } from "https://deno.land/std@0.150.0/semver/mod.ts";

const MIN_DENO_VERSION = "1.25.0";

function printError(message: string) {
  console.error(`%cerror%c: ${message}`, "color: red; font-weight: bold", "");
}

function error(message: string): never {
  printError(message);
  Deno.exit(1);
}

function ensureMinDenoVersion() {
  // Check that the minimum supported Deno version is being used.
  if (!gte(Deno.version.deno, MIN_DENO_VERSION)) {
    let message =
      `Deno version ${MIN_DENO_VERSION} or higher is required. Please update Deno.\n\n`;

    if (Deno.execPath().includes("homebrew")) {
      message +=
        "You seem to have installed Deno via homebrew. To update, run: `brew upgrade deno`\n";
    } else {
      message += "To update, run: `deno upgrade`\n";
    }

    error(message);
  }
}

ensureMinDenoVersion();

const CONFIRM_EMPTY_MESSAGE =
  "The target directory is not empty (files could get overwritten). Do you want to continue anyway?";


const flags = parse(Deno.args, {
  boolean: ["force", "vscode"],
  default: { "force": null, "vscode": null },
});

const unresolvedDirectory = Deno.args[0];
const resolvedDirectory = resolve(unresolvedDirectory);

try {
  const dir = [...Deno.readDirSync(resolvedDirectory)];
  const isEmpty = dir.length === 0 ||
    dir.length === 1 && dir[0].name === ".git";
  if (
    !isEmpty &&
    !(flags.force === null ? confirm(CONFIRM_EMPTY_MESSAGE) : flags.force)
  ) {
    error("Directory is not empty.");
  }
} catch (err) {
  if (!(err instanceof Deno.errors.NotFound)) {
    throw err;
  }
}


