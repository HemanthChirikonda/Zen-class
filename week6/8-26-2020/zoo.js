var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a, _b, _c, _d, _e, _f;
var tv = /** @class */ (function () {
    function tv(brand, volume, chennelId, maxchennels) {
        if (volume === void 0) { volume = 50; }
        if (chennelId === void 0) { chennelId = 0; }
        if (maxchennels === void 0) { maxchennels = 50; }
        this.chennels = [];
        this.brand = brand;
        for (var index = 0; index < 50; index++) {
            this.chennels.push(new chennel("https://feeds.intoday.in/livetv/?id=livetv-at&amp;aud_togle=1&amp;autostart=1&amp;t_src=live_tv_page&amp;t_med=web&amp;utm_medium=web&amp;utm_source=live_tv_page&amp;v=1.3&amp;noads=0?autoplay=1", index));
        }
        this.volume = volume;
        this.chennelId = chennelId;
        this.Maxchennels = maxchennels;
        this.IncChennel();
    }
    tv.prototype.IncChennel = function () {
        var _this = this;
        if (this.chennelId <= this.Maxchennels && this.chennelId >= 0) {
            this.chennelId++;
            this.chennels.forEach(function (element) {
                if (element.Id === _this.chennelId) {
                    console.log(element.Id);
                    var tvDiv = document.getElementById('tv');
                    tvDiv.innerHTML = "";
                    var displaychennel = element.chennelData();
                    tvDiv.append(displaychennel);
                }
            });
        }
    };
    tv.prototype.decChennel = function () {
        var _this = this;
        if (this.chennelId <= this.Maxchennels && this.chennelId > 1) {
            this.chennelId--;
            this.chennels.forEach(function (element) {
                if (element.Id === _this.chennelId) {
                    console.log(element.Id);
                    var tvDiv = document.getElementById('tv');
                    tvDiv.innerHTML = "";
                    var displaychennel = element.chennelData();
                    tvDiv.append(displaychennel);
                }
            });
        }
    };
    tv.prototype.callAllchennels = function () {
        return this.chennels;
    };
    tv.prototype.incVolume = function () {
        var _this = this;
        if (this.volume <= 100 && this.volume >= 0) {
            this.volume++;
            document.querySelectorAll('video').forEach(function (element) {
                element.volume = _this.volume;
            });
        }
        else {
            alert("Volume recahed Max");
        }
    };
    tv.prototype.decVolume = function () {
        var _this = this;
        if (this.volume <= 100 && this.volume >= 0) {
            this.volume--;
            document.querySelectorAll('video').forEach(function (element) {
                element.volume = _this.volume;
            });
        }
        else {
            alert("Volume recahed 0");
        }
    };
    tv.prototype.reset = function () {
        this.volume = 50;
        this.chennelId = 0;
        this.IncChennel();
    };
    tv.prototype.status = function () {
        var tvstatus = document.getElementById("displaystatus");
        tvstatus.innerHTML = this.brand + "   " + "at    " + 'chennel   ' + this.chennelId + "," + "    volume" + this.volume;
        console.log('status');
    };
    return tv;
}());
var chennel = /** @class */ (function () {
    function chennel(url, Id) {
        this.url = url;
        this.Id = Id;
    }
    chennel.prototype.chennelData = function () {
        var VideoDiv = document.createElement('div');
        VideoDiv.classList.add('row');
        var iframe = document.createElement('iframe');
        iframe.src = '' + this.url + '';
        iframe.id = '' + this.Id + '';
        iframe.style.width = 100 + "%";
        iframe.style.height = 500 + "px";
        iframe.setAttribute('autoplay', 'true');
        VideoDiv.append(iframe);
        return VideoDiv;
    };
    return chennel;
}());
var Led = new tv('Parasonic');
(_a = document.getElementById('chnelInc')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    Led.IncChennel();
    ;
});
(_b = document.getElementById('chnelDnc')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    Led.decChennel();
    ;
});
(_c = document.getElementById('volInc')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    Led.incVolume();
    ;
});
(_d = document.getElementById('volDnc')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    Led.decVolume();
    ;
});
(_e = document.getElementById('reset')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    Led.reset();
    ;
});
(_f = document.getElementById('status')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    Led.status();
    ;
});
var LED = /** @class */ (function (_super) {
    __extends(LED, _super);
    function LED(Brand, screenThickness, energyUsage, lifeSpan, refreshRate, ViewingAngle, backlight, displayDetails) {
        if (backlight === void 0) { backlight = 'NA'; }
        var _this = _super.call(this, Brand) || this;
        _this.screenThickness = screenThickness;
        _this.energyUsage = energyUsage;
        _this.lifeSpan = lifeSpan;
        _this.refreshRate = refreshRate;
        _this.ViewingAngle = ViewingAngle;
        _this.backlight = backlight;
        _this.displayDetails = displayDetails;
        return _this;
    }
    return LED;
}(tv));
var Plasma = /** @class */ (function (_super) {
    __extends(Plasma, _super);
    function Plasma(Brand, screenThickness, energyUsage, lifeSpan, refreshRate, ViewingAngle, backlight, displayDetails) {
        if (backlight === void 0) { backlight = 'NA'; }
        return _super.call(this, Brand, screenThickness, energyUsage, lifeSpan, refreshRate, ViewingAngle, backlight = 'NA', displayDetails) || this;
    }
    return Plasma;
}(LED));
