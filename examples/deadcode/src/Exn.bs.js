// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Caml_builtin_exceptions from "bs-platform/lib/es6/caml_builtin_exceptions.js";

function raises(param) {
  throw Caml_builtin_exceptions.not_found;
}

var catches1;

try {
  catches1 = undefined;
}
catch (exn){
  if (exn === Caml_builtin_exceptions.not_found) {
    catches1 = undefined;
  } else {
    throw exn;
  }
}

var catches2;

try {
  catches2 = undefined;
}
catch (exn$1){
  if (exn$1 === Caml_builtin_exceptions.not_found) {
    catches2 = undefined;
  } else {
    throw exn$1;
  }
}

var raiseAndCatch;

try {
  throw Caml_builtin_exceptions.not_found;
}
catch (exn$2){
  raiseAndCatch = undefined;
}

function raisesWithAnnotaion(param) {
  throw Caml_builtin_exceptions.not_found;
}

throw Caml_builtin_exceptions.not_found;

export {
  raises ,
  catches1 ,
  catches2 ,
  raiseAndCatch ,
  raisesWithAnnotaion ,
  callsRaiseWithAnnotation ,
  callsRaiseWithAnnotationAndIsAnnotated ,
  z ,
  incompleteMatch ,
  A ,
  B ,
  twoRaises ,
  sequencing ,
  wrongCatch ,
  C ,
  wrongCatch2 ,
  raise2Annotate3 ,
  $$Error ,
  parse_json_from_file ,
  reRaise ,
  switchWithCatchAll ,
  raiseInInternalLet ,
  indirectCall ,
  
}
/* catches1 Not a pure module */
