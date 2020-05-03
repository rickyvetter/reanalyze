type t = string;
let compare = String.compare;

let endOfFile = "End_of_file";
let failure = "Failure";
let invalidArgument = "Invalid_argument";
let matchFailure = "Match_failure";
let notFound = "Not_found";
let fromLid = lid =>
  lid.Asttypes.txt |> Longident.flatten |> String.concat(".");
let fromString = s => s;
let toString = s => s;