//steel forge
const steel-forge = extendContent(GenericSmelter, "steel-forge", {
	load() {
		this.super$load();
		this.regions = [];
		this.regions[0] = Core.atlas.find(this.name);
		this.regions[1] = Core.atlas.find(this.name + "-top");
	}
});
//brick kiln
const brick-kiln = extendContent(GenericSmelter, "brick-kiln", {
	load() {
		this.super$load();
		this.regions = [];
		this.regions[0] = Core.atlas.find(this.name);
		this.regions[1] = Core.atlas.find(this.name + "-top");
	}
});