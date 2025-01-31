import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Option "mo:base/Option";

actor {
    type Psychologist = {
        name : Text;
        data : Text;
    };

    // Menyimpan data psikolog berdasarkan Principal ID
    var psychologists = HashMap.HashMap<Principal, Psychologist>(0, Principal.equal, Principal.hash);

    public shared(msg) func register(name : Text, data : Text) : async Result.Result<(), Text> {
        let principal = msg.caller;
        switch (psychologists.get(principal)) {
            case (?_) {
                return #err("Psychologist already registered");
            };
            case null {
                psychologists.put(principal, { name = name; data = data });
                return #ok();
            };
        };
    };

    // Fungsi untuk mendapatkan data psikolog
    public shared query(msg) func getPsychologist() : async Result.Result<Psychologist, Text> {
        let principal = msg.caller;
        switch (psychologists.get(principal)) {
            case (?psychologist) {
                return #ok(psychologist);
            };
            case null {
                return #err("Psychologist not found");
            };
        };
    };

    // Fungsi untuk login psikolog
    public shared(msg) func login() : async Result.Result<(), Text> {
        let principal = msg.caller;
        switch (psychologists.get(principal)) {
            case (?_) {
                return #ok();
            };
            case null {
                return #err("Psychologist not registered");
            };
        };
    };
};