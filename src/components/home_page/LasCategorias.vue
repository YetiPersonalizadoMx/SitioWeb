<template>
  <div class="top-cat">
    <div class="cat-banner pt-10">
      <img src="/src/assets/images/cat-banner.jpg" class="w-100" alt="" />
    </div>
    <div class="categorias pt-11">
      <div class="title d-flex justify-center align-center px-5 mb-3">
        <h3 class="text-center flex-grow-1" style="font-weight: 900; font-size: 20px">
          Categorias
        </h3>
        <a href="#" class="text-black">Todas las categorias</a>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="6" sm="4" md="3" lg="2" v-for="cat in categorias" :key="cat.nombre">
            <v-card class="text-center" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent"
                  style="
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;

                    background-color: #f5f5f5;
                  "
                >
                  <img
                    :src="cat.image"
                    alt=""
                    v-bind="props"
                    :style="`width:100%; cursor: pointer; transition: 0.4s all easy-in-out; scale: ${isHovering ? 1.05 : 1};`"
                  />
                </div>
              </v-hover>

              <v-card-text>{{ cat.nombre }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    categorias: [
      {
        nombre: 'Botellas',
        image:
          'https://yeti-webmedia.imgix.net/m/7c8b123fca3363c7/W-site_studio_drinkware_Rambler_26oz_Straw_Bottle_Firefly_Yellow_on_Firefly_Yellow_Front_0149_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      },
      {
        nombre: 'Vasos',
        image:
          'https://yeti-webmedia.imgix.net/m/2bdca5e594da5deb/W-Drinkware_WineTumbler_10oz_Navy_Studio_Back.png?bg=0fff&auto=format&w=846&h=846',
      },
      {
        nombre: 'Tazas',
        image:
          'https://yeti-webmedia.imgix.net/m/1ca2263165c9e1df/W-site_studio_drinkware_Rambler_14oz_Mug_2-0_Big_Sky_Blue_Front_1499_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      },
      {
        nombre: 'Vasos con sorbete',
        image:
          'https://yeti-webmedia.imgix.net/m/2f7946890467d902/W-site_studio_drinkware_Rambler_35oz_Straw_Mug_Wild_Vine_Red_Back_0172_B_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      },
      {
        nombre: 'Prensas',
        image:
          'https://yeti-webmedia.imgix.net/m/e49a2e3242a3558/W-site_studio_drinkware_FrenchPress_34_Big_Sky_Blue_Back_3787_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      },
      {
        nombre: 'Jarras',
        image:
          'https://yeti-webmedia.imgix.net/m/36791246cdee578a/W-site_studio_drinkware_Pitchers_64_Rescue_Red_Back_6748_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      },
      {
        nombre: 'Enfriadores',
        image:
          'https://yeti-webmedia.imgix.net/m/620a4a61faa04361/W-site_studio_drinkware_Rambler_Wine_Chiller_Big_Wave_Blue_Back_0532_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      },
      {
        nombre: 'Cocteleras',
        image:
          'https://yeti-webmedia.imgix.net/m/249d946fcd335176/W-site_studio_Drinkware_Rambler_Cocktail_Shaker_on_Stainless_20oz_Front_11898_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      },
      {
        nombre: 'Portalatas',
        image:
          'https://yeti-webmedia.imgix.net/m/42b77c60e3014a10/W-site_studio_drinkware_Rambler_12oz_Can_Colster_Sandstone_Pink_Back_4147_Layers_F_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      },
      {
        nombre: 'Cubetas',
        image:
          'https://yeti-webmedia.imgix.net/m/6c3115e2baf4a411/W-230035_Power_Pink_site_studio_drinkware_Rambler_Bev_Bucket_Power_Pink_Back_Handle_Up_0902_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      },
      {
        nombre: 'Cantimploras',
        image:
          'https://yeti-webmedia.imgix.net/m/74759d69d42994f3/W-site_studio_drinkware_Flask_White_Front_9705_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846',
      },
      {
        nombre: 'Galones',
        image:
          'https://yeti-webmedia.imgix.net/m/128c9f5d3c3ea198/W-Drinkware_Jug_1Gallon_SS_Studio_PrimaryB.png?bg=0fff&auto=format&w=846&h=846',
      },
    ],
  }),
}
</script>
