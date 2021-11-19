const bt7 = extend(UnitType, "bt-7", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"BT-7.png"
	}
});

//stats
bt7.mineTier = 0;
bt7.hitsize = 5;
bt7.health = 250;
bt7.armor = 2;
bt7.landshake = 0;
bt7.rotateSpeed = 2.5;

bt7.commandLimit = 4;

bt7.legCount = 0;
bt7.legLength = 0;
bt7.legBaseOffset = 0;
bt7.legMoveSpace = 0;
bt7.legTrns = 0;
bt7.hovering = false;
bt7.visualElevation = 0.05;
bt7.allowLegStep = false;
bt7.ammoType = AmmoTypes.standard;
bt7.groundLayer = Layer.legUnit;

bt7.speed = 1.25;

bt7.mineTier = 0;
bt7.mineSpeed = 0;
bt7.drawShields = false;


const bt7maingun = new Weapon("45mm-cannon");
bt7maingun.shootSound = sounds.shoot.ogg;
bt7maingun.soundPitchMin = 0.5;
bt7maingun.soundPitchMax = 0.6;
bt7maingun.top = true;
bt7maingun.mirror = false;
bt7maingun.inaccuracy = 2;
bt7maingun.velocityRnd = 1.5;
bt7maingun.shake = 2;
bt7maingun.shootY = 5;
bt7maingun.rotate = true;
bt7maingun.x = 0;
bt7maingun.y = 5;
bt7maingun.reload = 50;
bt7maingun.shootCone = 360;
bt7maingun.recoil = 0.2;

bt7maingun.cooldownTime = 50;

const bt7maingunshell = new BulletType();
bt7maingunshell.length = 10;
bt7maingunshell.damage = 120;
bt7maingunshell.width = 5;
bt7maingunshell.speed = 60;

bt7maingunshell.lifetime = 65;

bt7maingun.bullet = bt7maingunshell;
bt7.weapons.add(bt7maingun);
bt7.constructor = () => extend(LegsUnit, {});