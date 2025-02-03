import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";

actor MonokoBackend {
  // Gunakan stable array untuk menyimpan data sementara saat upgrade
  stable var stableUsers : [(Principal, Text)] = [];

  // Inisialisasi HashMap dengan kapasitas awal 10 (perbaiki kesalahan `fromIter`)
  var users = HashMap.fromIter<Principal, Text>(
    Iter.fromArray(stableUsers),  // Ubah array menjadi iterator
    10,                           // Kapasitas awal
    Principal.equal,              // Comparator untuk Principal
    Principal.hash                // Hash function untuk Principal
  );

  // Fungsi yang akan dipanggil sebelum upgrade (simpan data ke stable variable)
  system func preupgrade() {
    stableUsers := Iter.toArray(users.entries());
  };

  // Fungsi yang akan dipanggil setelah upgrade (muat kembali data dari stable variable)
  system func postupgrade() {
    users := HashMap.fromIter(
      Iter.fromArray(stableUsers), 
      10, 
      Principal.equal, 
      Principal.hash
    );
  };

  // Fungsi untuk registrasi user
  public shared ({ caller }) func registerUser(name : Text) : async Text {
    if (users.get(caller) == null) {
      users.put(caller, name);
      return "User " # name # " registered successfully!";
    } else {
      return "User already registered.";
    }
  };

  // Fungsi untuk mendapatkan nama user berdasarkan Principal ID
  public shared query ({ caller }) func getUser() : async ?Text {
    return users.get(caller);
  };

  // Fungsi Greet
  public query func greet(name : Text, caller : Principal) : async Text {
    return "Hello, " # name # "! Your Principal ID is " # Principal.toText(caller);
  };
};
