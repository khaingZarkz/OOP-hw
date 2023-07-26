class Smartphone {
    Brand;
    Memory;
    APP;
    StorageCapc;
    ScrmSz;
    BattCape;
    CamPx;
    RAM;



constructor(Brand,Memory,APP,StorageCapc,ScrnSz,BattCapc,CamPx,RAM){
    this.Brand = Brand;
    this.Memory = Memory;
    this.APP = APP;
    this.StorageCapc =StorageCapc;
    this.ScrnSz =ScrnSz;
    this.BattCapc= BattCapc;
    this.CamPx= CamPx;
    this.RAM = RAM;
}

isRam(RAM){
    if (RAM>=8){
        return true;
    }
    return false;
}

isMemory(Memory){
    if(Memory>=164)
    {
    return true;
    }
    return false;
}


hello () {
    return`
    Brand: ${this.Brand}
    Memory: ${this.Memory}
    APP: ${this.APP}
    Storage_Capacity: ${this.StorageCapc}
    Screen_Size: ${this.ScrnSys}
    Battery_Capacity: ${this.BattCapc}
    Camera_Resolution:${this.CamPx}
    RAM: ${this.RAM}
    Are there many RAM? : ${this.isRam(this.RAM)}
    Are there many Memory?: ${this.isMemory(this.Memory)}
    `;
}

}
const inf = new Smartphone(
    "Samsung",
    "Spark 14 Pro",
    "Techno",
    "iOS",
    "1 TB",
    "6.2 Inches",
    "5000", 
    "8MP",
    "5000mAH",
    "GSM,LTE",
    "A15"

);
console.log(inf.hello());



