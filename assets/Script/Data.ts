import { TypeAudio } from "./AudioManger";
import Singleton from "./Singleton";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Data extends cc.Component {

    protected onLoad(): void {
        this.setData();

    }
    protected start(): void {
        Singleton.AUDIO_MANAGER.playMusic(TypeAudio.BGMHome);
    }
    loadScene() {

        Singleton.LOAD_SCENE_MANAGER.loadSceneName("LopHoc");
        Singleton.AUDIO_MANAGER.playEffect(TypeAudio.ButtonClick);
        Singleton.AUDIO_MANAGER.stopMusic();

    }
    clearData() {
        console.log("ClearData");

        cc.sys.localStorage.clear();
    }

    setData() {
        const Star = {
            count: 0,

        };
        var jsonStar = localStorage.getItem("Star");
        if (jsonStar == null) {
            console.log("SET DATA STAR");
            const jsonStar = JSON.stringify(Star);
            cc.sys.localStorage.setItem("Star", jsonStar);
        }
        const NameNV = {
            namenv: "ABC",
            isFirst: false,
            isMale: false
        };
        var jsonNameNv = localStorage.getItem("NameNV");
        if (jsonNameNv == null) {
            console.log("SET DATA Name");
            const jsonNameNv = JSON.stringify(NameNV);
            cc.sys.localStorage.setItem("NameNV", jsonNameNv);
        }

        const ClassMath = {
            currentQues: 1,
            nextQues: 2,
            pass: false,
            dct: 1
        };
        const ClassEngLish = {
            currentQues: 1,
            nextQues: 2,
            pass: false
        };
        const ClassTiengViet = {
            currentQues: 1,
            nextQues: 2,
            pass: false
        };
        var jsonDataMath = localStorage.getItem("Math");
        var jsonDataEngLish = localStorage.getItem("EngLish");
        var jsonDataTiengViet = localStorage.getItem("TiengViet");

        if (jsonDataMath == null) {
            console.log("SET DATA MATH");
            const dataMath = JSON.stringify(ClassMath);
            localStorage.setItem('Math', dataMath);
        }
        if (jsonDataEngLish == null) {
            console.log("SET DATA EngLish");
            const dataEngLish = JSON.stringify(ClassEngLish);
            localStorage.setItem('EngLish', dataEngLish);
        }
        if (jsonDataTiengViet == null) {
            console.log("SET DATA TiengViet");
            const dataTiengViet = JSON.stringify(ClassTiengViet);
            localStorage.setItem('TiengViet', dataTiengViet);
        }
    }
    resetData() {
        var jsonDataMath = localStorage.getItem("Math");
        var jsonDataEngLish = localStorage.getItem("EngLish");
        var jsonDataTiengViet = localStorage.getItem("TiengViet");
        var DataMath = JSON.parse(jsonDataMath);
        var DataEngLish = JSON.parse(jsonDataEngLish);
        var DataTiengViet = JSON.parse(jsonDataTiengViet);

        if (jsonDataMath != null) {
            console.log("ReSetData");

            DataMath.currentQues = 1;
            DataMath.nextQues = 2;
            DataMath.pass = false;
            localStorage.setItem("Math", JSON.stringify(DataMath));
        }
        if (jsonDataEngLish != null) {
            DataEngLish.currentQues = 1;
            DataEngLish.nextQues = 2;
            DataEngLish.pass = false;
            localStorage.setItem("EngLish", JSON.stringify(DataEngLish));
        }
        if (jsonDataTiengViet != null) {
            DataTiengViet.currentQues = 1;
            DataTiengViet.nextQues = 2;
            DataTiengViet.pass = false;
            localStorage.setItem("TiengViet", JSON.stringify(DataTiengViet));
        }
    }

}
