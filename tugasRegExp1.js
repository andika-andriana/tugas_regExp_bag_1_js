function panggilRegexp(value) {
  let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

  /* untuk menyelesaikan tugas ini kita hanya perlu menggabung :
  flag i dan g agar matching pada regExp dapat continues dan
  tidak case sensitif.
  */

  console.log(str.match(/[c]/ig));
  console.log(str.match(/[k]/ig));
  console.log(str.match(/[l]/ig));

}

panggilRegexp();