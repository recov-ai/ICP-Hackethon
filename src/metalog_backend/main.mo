import Principal "mo:base/Principal";

actor {
  public query func greet(name : Text, caller : Principal) : async Text {
    return "Hello, " # name # "! Your Principal ID is " # Principal.toText(caller);
  };
};
