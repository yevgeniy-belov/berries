const sides = [
  "", "-top", "-right", "-bottom", "-left"
];

module.exports = {

  rootVars: function ( ssot ) {
    let defaultColor = ssot.border.strength.default;
    let property = {};
    let properties = {};

    property['--border-alpha-base'] = '1';
    property['--border-alpha-factor'] = `${defaultColor.value || 0.5}`;

    sides.forEach( side => {
      property[`--border${side}-style`] = 'solid';
      property[`--border${side}-width`] = '0';
      property[`--border${side}-alpha-base`] = '1';
      property[`--border${side}-alpha-factor`] = `${defaultColor.value || 0.5}`;
      property[`--border${side}-hue`] = '0';
      property[`--border${side}-saturation`] = '0%';
      property[`--border${side}-lightness`] = 'var(--fg-lightness)';

    } );
    properties['.theme'] = property;

    return property
  },

  sidePropertyValue: function ( value, side, property ) {

    if ( value === 'color' ) {
      return `hsla(var(--border${side}-hue),var(--border${side}-saturation),var(--border${side}-lightness),calc(var(--border${side}-alpha-base) * var(--border${side}-alpha-factor)))`;
    }
    else
      return property.value;

  },
  sides: function ( type ) {
    let props = {};
    let colorSides = [];
    if ( type === 'all-sides' ) {
      colorSides = [];
      let sides = ["-top", "-right", "-bottom", "-left"]

      let sideProperty = {};
      sides.forEach( side => {
        sideProperty[`border${side}-style`] = `var(--border${side}-style)`;
        sideProperty[`--border${side}-width`] = '1px';
        sideProperty[`border${side}-width`] = `var(--border${side}-width)`;
        sideProperty['--opacity'] = '1';
        sideProperty[`--l${side}-factor`] = '1';
        sideProperty[`--border${side}-hue`] = '0';
        sideProperty[`--border${side}-saturation`] = '0%';
        sideProperty[`--border${side}-lightness`] = 'var(--fg-lightness)';
        sideProperty[`border${side}-color`] = `hsla(var(--border${side}-hue),var(--border${side}-saturation),var(--border${side}-lightness),calc(var(--border${side}-alpha-base) * var(--border${side}-alpha-factor)))`;
      } );
      props['.border'] = sideProperty;

    };

    if ( type === 'per-side' ) {
      colorSides = ["-top", "-right", "-bottom", "-left"]
    };

    colorSides.forEach( side => {
      let sideProperty = {};

      sideProperty[`border${side}-style`] = `var(--border${side}-style)`;
      sideProperty[`--border${side}-width`] = '1px';
      sideProperty[`border${side}-width`] = `var(--border${side}-width)`;
      sideProperty['--opacity'] = '1';
      sideProperty[`--l${side}-factor`] = '1';
      sideProperty[`--border${side}-hue`] = '0';
      sideProperty[`--border${side}-saturation`] = '0%';
      sideProperty[`--border${side}-lightness`] = 'var(--fg-lightness)';
      sideProperty[`border${side}-color`] = `hsla(var(--border${side}-hue),var(--border${side}-saturation),var(--border${side}-lightness),calc(var(--border${side}-alpha-base) * var(--border${side}-alpha-factor)))`;

      props[`.border${side.substring( 0, 2 )}`] = sideProperty;


    } );

    return props;
  },

  property: function ( customPropertyName, propertyVariants ) {
    let props = {};

    propertyVariants.forEach( property => {
      sides.forEach( side => {
        if ( side !== '' ) {
          props[`.border${side.substring( 0, 2 )}-${property.name}`] = {
            [`--border${side}-${customPropertyName}`]: `${property.value}`
          };
        } else {
          let allSides = {};
          allSides[`--border-${customPropertyName}`] = `${property.value}`;
          allSides[`--border-top-${customPropertyName}`] = `${property.value}`;
          allSides[`--border-right-${customPropertyName}`] = `${property.value}`;
          allSides[`--border-bottom-${customPropertyName}`] = `${property.value}`;
          allSides[`--border-left-${customPropertyName}`] = `${property.value}`;
          props[`.border-${property.name}`] = allSides;

        }
      } );
    } );

    return props;
  },

  colors: function ( type, colors, defaultColor ) {
    let props = {};

    // Splitting general (all-sides) rules from more specific ( per - side ) rules.
    // Otherwise, some general rules will appear after some specific ones.

    let colorSides = [];
    if ( type === 'all-sides' ) {
      colorSides = [""]
    };

    if ( type === 'per-side' ) {
      colorSides = ["-top", "-right", "-bottom", "-left"]
    };

    colors.forEach( color => {
      colorSides.forEach( side => {
        let colorProp = {};
        colorProp['--opacity'] = '1';
        colorProp[`--l${side}-factor`] = '1';
        // colorProp[`--border${side}-hue`] = `${color.hsl[0]}`;
        // colorProp[`--border${side}-saturation`] = `${color.hsl[1]}`;
        // colorProp[`--border${side}-lightness`] = `${color.hsl[2]}`;
        colorProp[`--border${side}-alpha-base`] = `${defaultColor.value * ( 1 / defaultColor.value ) * 3.5 || 1}`;
        colorProp[`--border${side}-hue`] = `var(--h-${color.name})`;
        colorProp[`--border${side}-saturation`] = `var(--s-${color.name})`;
        colorProp[`--border${side}-lightness`] = `var(--l-${color.name})`;
        colorProp[`border${side}-color`] = `hsla(var(--border${side}-hue),var(--border${side}-saturation),var(--border${side}-lightness),calc(var(--border${side}-alpha-base) * var(--border${side}-alpha-factor)))`;
        props[`.border${side.substring( 0, 2 )}-${color.name}`] = colorProp;
      } )
    } )
    return props;
  },

  rules: function ( ssot ) {
    let intensities = ssot.border.strength.list;
    let defaultColor = ssot.border.strength.default;
    let weakestIntensity = '';
    intensities.forEach( intensity => {
      if ( intensity.name === 'weakest' ) {
        weakestIntensity = intensity.value;
      }
    } );

    return {
      ...module.exports.sides( 'all-sides' ),
      ...module.exports.sides( 'per-side' ),

      ...module.exports.colors( 'all-sides', ssot.colors.list, defaultColor ),
      ...module.exports.colors( 'per-side', ssot.colors.list, defaultColor ),
      //
      ...module.exports.property( 'alpha-factor', ssot.border.strength.list ),
      ...module.exports.property( 'width', ssot.border.width.list ),
      ...module.exports.property( 'style', ssot.border.style.list ),

    }
  },

}