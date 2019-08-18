
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("57db3fe4-4720-424a-abe6-dc21090b8341");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '57db3fe4-4720-424a-abe6-dc21090b8341' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"cbcbcbbe-90fe-4658-9d54-340bc68fa8e2": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "fccf55b7-ed02-4c90-a5f5-bb7f3d80a52f", "attributes": {"ticker": {"type": "BasicTicker", "id": "4eb0b8ca-602a-40a7-9dfb-f69aabd115f4"}, "formatter": {"type": "BasicTickFormatter", "id": "d95017c7-bde3-4fae-96ee-cf6e20dc8355"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64"}}}, {"type": "LinearAxis", "id": "70e68f1f-8995-4be6-8649-1a0b1c29bc31", "attributes": {"ticker": {"type": "BasicTicker", "id": "9b578a6a-4493-4967-9c14-9e84d1b7e256"}, "formatter": {"type": "BasicTickFormatter", "id": "4ad3ac16-38f2-43a6-8328-4f39feabe7cf"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64"}}}, {"type": "WheelZoomTool", "id": "f7438dcb-29be-47a5-a846-8ef0aabf0177", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64"}}}, {"type": "BoxAnnotation", "id": "5cca7455-c187-4154-bb84-5facc2a7b75d", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "4eb0b8ca-602a-40a7-9dfb-f69aabd115f4", "attributes": {}}, {"type": "Plot", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64", "attributes": {"y_range": {"type": "DataRange1d", "id": "0c7c67a2-e5c5-461b-865f-66b6d264fb11"}, "left": [{"type": "LinearAxis", "id": "fccf55b7-ed02-4c90-a5f5-bb7f3d80a52f"}], "renderers": [{"type": "LinearAxis", "id": "70e68f1f-8995-4be6-8649-1a0b1c29bc31"}, {"type": "Grid", "id": "9f95c55c-d921-4a00-91f0-ce12f4a31c84"}, {"type": "LinearAxis", "id": "fccf55b7-ed02-4c90-a5f5-bb7f3d80a52f"}, {"type": "Grid", "id": "315b4169-e6d3-4ccd-b478-9a29c9dd1e74"}, {"type": "BoxAnnotation", "id": "5cca7455-c187-4154-bb84-5facc2a7b75d"}, {"type": "GlyphRenderer", "id": "6b119863-1a7d-409b-9c2f-6dda9bb8b37f"}], "tool_events": {"type": "ToolEvents", "id": "224fdb26-a7b0-4c1d-82cd-6ef7967a944c"}, "below": [{"type": "LinearAxis", "id": "70e68f1f-8995-4be6-8649-1a0b1c29bc31"}], "tools": [{"type": "PanTool", "id": "82dd5d03-3927-4bfb-9a43-1f676d96df49"}, {"type": "WheelZoomTool", "id": "f7438dcb-29be-47a5-a846-8ef0aabf0177"}, {"type": "BoxZoomTool", "id": "2323ff99-5532-4591-a03f-d528640d39bb"}, {"type": "PreviewSaveTool", "id": "8a3b88a9-4dab-4a23-b011-4dd3d847e319"}, {"type": "ResizeTool", "id": "01b19d6a-c427-40e1-8e79-1cbc18d8b9a5"}, {"type": "ResetTool", "id": "a5c29582-c4e0-4ff3-aa9b-8a34c165e25a"}, {"type": "HelpTool", "id": "51ee228e-c6d9-4d5f-b563-2140ee389950"}], "x_range": {"type": "DataRange1d", "id": "e9ede35d-7350-446f-ac0e-18c8a75d4fa4"}}, "subtype": "Figure"}, {"type": "GeoJSONDataSource", "id": "c914f9f9-072c-4f32-89a6-5f74c9f7fe50", "attributes": {"geojson": "{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"id\":\"463098\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.1208465099334717,51.4613151550293]},\"properties\":{\"OrganisationCode\":\"Q64\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Bath, Gloucestershire, Swindon And Wiltshire Area Team\",\"Address1\":\"1st Floor\",\"Address2\":\"Bewley House\",\"Address3\":\"Marshfield Road\",\"City\":\"Chippenham\",\"County\":\"Wiltshire\",\"Postcode\":\"SN15 1JW\",\"Phone\":\"0113 8251 500\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/bgsw-at/\"}},{\"type\":\"Feature\",\"id\":\"463099\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.5929524898529053,51.459877014160156]},\"properties\":{\"OrganisationCode\":\"Q65\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Bristol, North Somerset, Somerset And South Gloucestershire Area Team\",\"Address1\":\"South Plaza\",\"Address3\":\"Marlborough Street\",\"City\":\"Bristol\",\"County\":\"Somerset\",\"Postcode\":\"BS1 3NX\",\"Phone\":\"0117 976 6600\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/bnsssg-at/\"}},{\"type\":\"Feature\",\"id\":\"463100\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-4.232546806335449,50.42112731933594]},\"properties\":{\"OrganisationCode\":\"Q66\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Devon, Cornwall And Isles Of Scilly Area Team\",\"Address1\":\"Peninsula House\",\"Address2\":\"Kingsmill Road\",\"Address3\":\"Tamar View Industrial Estate\",\"City\":\"Cornwall\",\"County\":\"Cornwall\",\"Postcode\":\"PL12 6LE\",\"Phone\":\"01752 679250\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/dcis-at/\"}},{\"type\":\"Feature\",\"id\":\"463101\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[0.27698493003845215,51.193748474121094]},\"properties\":{\"OrganisationCode\":\"Q67\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Kent And Medway Area Team\",\"Address1\":\"Wharf House\",\"Address2\":\"Medway Wharf Road\",\"City\":\"Tonbridge\",\"County\":\"Kent\",\"Postcode\":\"TN9 1RE\",\"Phone\":\"01732 375200\",\"Email\":\"england.kentandmedwaybusinessoffice@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/km-at/\"}},{\"type\":\"Feature\",\"id\":\"463102\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-0.1647440642118454,51.170936584472656]},\"properties\":{\"OrganisationCode\":\"Q68\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Surrey And Sussex Area Team\",\"Address1\":\"York House\",\"Address2\":\"18-20 Massetts Road\",\"City\":\"Horley\",\"County\":\"Surrey\",\"Postcode\":\"RH6 7DE\",\"Phone\":\"01293 778899\",\"Email\":\"england.surreyandsussex-businessoffice@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/ss-at/\"}},{\"type\":\"Feature\",\"id\":\"463103\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.2079498767852783,51.72844696044922]},\"properties\":{\"OrganisationCode\":\"Q69\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Thames Valley Area Team\",\"Address1\":\"Jubilee House\",\"Address2\":\"5510 John Smith Drive\",\"Address3\":\"Oxford Business Park South\",\"City\":\"Cowley\",\"County\":\"Oxfordshire\",\"Postcode\":\"OX4 2LH\",\"Phone\":\"01865 963800\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/tv-at/\"}},{\"type\":\"Feature\",\"id\":\"463104\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.4493359327316284,50.92325973510742]},\"properties\":{\"OrganisationCode\":\"Q70\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Wessex Area Team\",\"Address2\":\"Oakley Road\",\"City\":\"Southampton\",\"County\":\"Hampshire\",\"Postcode\":\"SO16 4GX\",\"Phone\":\"023 8029 6914\",\"Email\":\"england.wessexpatientexperience@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/w-at/\"}},{\"type\":\"Feature\",\"id\":\"463105\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-0.13727261126041412,51.49694061279297]},\"properties\":{\"OrganisationCode\":\"Q71\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"London Area Team\",\"Address2\":\"2nd Floor, Southside\",\"Address3\":\"105 Victoria Street\",\"City\":\"London\",\"Postcode\":\"SW1E 6QT\",\"Phone\":\"0207 932 3700\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/london/\"}},{\"type\":\"Feature\",\"id\":\"463120\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.5846381187438965,53.37392807006836]},\"properties\":{\"OrganisationCode\":\"Q44\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Cheshire, Warrington And Wirral Area Team\",\"Address1\":\"NHS Quayside (NHS North West)\",\"Address2\":\"Wilderspool Park\",\"Address3\":\"Greensall Avenue\",\"City\":\"Warrington\",\"County\":\"Cheshire\",\"Postcode\":\"WA4 6HL\",\"Phone\":\"01925 406000\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/cww-at/\"}},{\"type\":\"Feature\",\"id\":\"463121\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.5323498249053955,53.79779815673828]},\"properties\":{\"OrganisationCode\":\"Q45\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Durham, Darlington And Tees Area Team\",\"Address1\":\"The Old Exchange\",\"Address2\":\"Barnard Street\",\"City\":\"Darlington\",\"County\":\"Durham\",\"Postcode\":\"LS2 7UE\",\"Phone\":\"0113 825 1609\",\"Email\":\"england.ddt-at-generalenquiries@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/ddt-at/\"}},{\"type\":\"Feature\",\"id\":\"463122\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.233488082885742,53.47760009765625]},\"properties\":{\"OrganisationCode\":\"Q46\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Greater Manchester Area Team\",\"Address1\":\"4th Floor\",\"Address2\":\"3 Picadilly Place\",\"Address3\":\"London Road\",\"City\":\"Manchester\",\"County\":\"Lancashire\",\"Postcode\":\"M1 3BN\",\"Phone\":\"0845 0500194\",\"Email\":\"nhse.gmat@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/gm-at/\"}},{\"type\":\"Feature\",\"id\":\"463123\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.705566644668579,53.77775573730469]},\"properties\":{\"OrganisationCode\":\"Q47\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Lancashire Area Team\",\"Address1\":\"Second Floor, Preston Business Centre\",\"Address2\":\"Watling Street Road\",\"Address3\":\"Fulwood\",\"City\":\"Preston\",\"County\":\"Lancashire\",\"Postcode\":\"PR2 8DY\",\"Phone\":\"01772 420150\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/lanc-at/\"}},{\"type\":\"Feature\",\"id\":\"463124\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.9802029132843018,53.38481903076172]},\"properties\":{\"OrganisationCode\":\"Q48\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Merseyside Area Team\",\"Address1\":\"Regatta Place\",\"Address2\":\"Summers Road\",\"Address3\":\"Brunswick Business Park\",\"City\":\"Liverpool\",\"County\":\"Merseyside\",\"Postcode\":\"L3 4BL\",\"Phone\":\"0151 285 4777\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/mers-at/\"}},{\"type\":\"Feature\",\"id\":\"463125\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.7141016721725464,54.96938705444336]},\"properties\":{\"OrganisationCode\":\"Q49\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Cumbria, Northumberland, Tyne And Wear Area Team\",\"Address1\":\"Waterfront\",\"Address2\":\"4 Goldcrest Way\",\"Address3\":\"Newburn\",\"City\":\"Newcastle Upon Tyne\",\"County\":\"Tyne and Wear\",\"Postcode\":\"NE15 8NY\",\"Phone\":\"01912 106400\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/cntw-at/\"}},{\"type\":\"Feature\",\"id\":\"463126\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.0497655868530273,53.989986419677734]},\"properties\":{\"OrganisationCode\":\"Q50\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"North Yorkshire And Humber Area Team\",\"Address1\":\"Unit 3\",\"Address2\":\"Alpha Court\",\"Address3\":\"Monks Cross\",\"City\":\"York\",\"County\":\"North Yorkshire\",\"Postcode\":\"YO32 9WN\",\"Phone\":\"0113 825 1845\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/nyh-at/\"}},{\"type\":\"Feature\",\"id\":\"463127\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.2550956010818481,53.42157745361328]},\"properties\":{\"OrganisationCode\":\"Q51\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"South Yorkshire And Bassetlaw Area Team\",\"Address1\":\"Oak House\",\"Address2\":\"Moorhead Way\",\"Address3\":\"Bramley\",\"City\":\"Rotherham\",\"County\":\"South Yorkshire\",\"Postcode\":\"S66 1YY\",\"Phone\":\"01709 302000\",\"Email\":\"england.syb-businessoffice@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/syb-at/\"}},{\"type\":\"Feature\",\"id\":\"463128\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.544582486152649,53.78975296020508]},\"properties\":{\"OrganisationCode\":\"Q52\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"West Yorkshire Area Team\",\"Address1\":\"3 Leeds City Office Park\",\"Address2\":\"Meadow Lane\",\"City\":\"Leeds\",\"County\":\"West Yorkshire\",\"Postcode\":\"LS11 5BD\",\"Phone\":\"0113 8252700\",\"Email\":\"reception.westyorkshireareateam@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/wy-at/\"}},{\"type\":\"Feature\",\"id\":\"463129\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.1813161373138428,52.18680953979492]},\"properties\":{\"OrganisationCode\":\"Q53\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Arden, Herefordshire And Worcestershire Area Team\",\"Address2\":\"Wildwood\",\"Address3\":\"Wildwood Drive\",\"City\":\"Worcester\",\"County\":\"Worcestershire\",\"Postcode\":\"WR5 2LG\",\"Phone\":\"0113 825 3099\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/ahw-at/\"}},{\"type\":\"Feature\",\"id\":\"463130\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.9351675510406494,52.471920013427734]},\"properties\":{\"OrganisationCode\":\"Q54\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Birmingham And The Black Country Area Team\",\"Address1\":\"St Chads Court\",\"Address2\":\"213 Hagley Road\",\"Address3\":\"Edgbaston\",\"City\":\"Birmingham\",\"County\":\"West Midlands\",\"Postcode\":\"B16 9RG\",\"Phone\":\"0121 695 2222\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/bsbc-at/\"}},{\"type\":\"Feature\",\"id\":\"463131\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.1435775756835938,53.12958526611328]},\"properties\":{\"OrganisationCode\":\"Q55\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Derbyshire And Nottinghamshire Area Team\",\"Address1\":\"Birch House\",\"Address2\":\"Ransom Wood Business Park\",\"Address3\":\"Southwell Road West, Rainworth\",\"City\":\"Nottingham\",\"County\":\"Nottinghamshire\",\"Postcode\":\"NG21 0HJ\",\"Phone\":\"0300 300 1234\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/dn-at/\"}},{\"type\":\"Feature\",\"id\":\"463132\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[0.19126050174236298,52.18547821044922]},\"properties\":{\"OrganisationCode\":\"Q56\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"East Anglia Area Team\",\"Address1\":\"CPC1\",\"Address2\":\"Capital Business Park\",\"Address3\":\"Fulbourn\",\"City\":\"Cambridge\",\"County\":\"Cambridgeshire\",\"Postcode\":\"CB21 5XE\",\"Phone\":\"01223 708700\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/ea-at/\"}},{\"type\":\"Feature\",\"id\":\"463133\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[0.5076583027839661,51.74932098388672]},\"properties\":{\"OrganisationCode\":\"Q57\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Essex Area Team\",\"Address1\":\"Swift House\",\"Address2\":\"Hedgerows Business Park\",\"Address3\":\"Colchester Road, Springfield\",\"City\":\"Chelmsford\",\"County\":\"Essex\",\"Postcode\":\"CM2 5PF\",\"Phone\":\"01245 398770\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/essex-at/\"}},{\"type\":\"Feature\",\"id\":\"463134\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-0.20884820818901062,51.8019905090332]},\"properties\":{\"OrganisationCode\":\"Q58\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Hertfordshire And The South Midlands Area Team\",\"Address1\":\"Charter House\",\"Address2\":\"Parkway\",\"City\":\"Welwyn Garden City\",\"County\":\"Hertfordshire\",\"Postcode\":\"AL8 6JL\",\"Phone\":\"01707 390855\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/hsm-at/\"}},{\"type\":\"Feature\",\"id\":\"463135\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.189500093460083,52.593223571777344]},\"properties\":{\"OrganisationCode\":\"Q59\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Leicestershire And Lincolnshire Area Team\",\"Address1\":\"Fosse House\",\"Address2\":\"6 Smith Way\",\"Address3\":\"Grove Park, Enderby\",\"City\":\"Leicester\",\"County\":\"Leicestershire\",\"Postcode\":\"LE19 1SX\",\"Phone\":\"0116 295 7500\",\"Email\":\"england.leicsandlincsareateam@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/ll-at/\"}},{\"type\":\"Feature\",\"id\":\"463136\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.9140186309814453,52.7487907409668]},\"properties\":{\"OrganisationCode\":\"Q60\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Shropshire And Staffordshire Area Team\",\"Address1\":\"Anglesey House,\",\"Address2\":\"Wheelhouse Road,\",\"Address3\":\"Towers Plaza,\",\"City\":\"Rugeley,\",\"County\":\"Staffordshire\",\"Postcode\":\"WS15 1UL\",\"Phone\":\"0300 7900233\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/ss-at/\"}}]}\n", "callback": null}}, {"type": "BasicTickFormatter", "id": "d95017c7-bde3-4fae-96ee-cf6e20dc8355", "attributes": {}}, {"type": "DataRange1d", "id": "0c7c67a2-e5c5-461b-865f-66b6d264fb11", "attributes": {"callback": null}}, {"type": "HelpTool", "id": "51ee228e-c6d9-4d5f-b563-2140ee389950", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64"}}}, {"type": "BasicTicker", "id": "9b578a6a-4493-4967-9c14-9e84d1b7e256", "attributes": {}}, {"type": "GlyphRenderer", "id": "6b119863-1a7d-409b-9c2f-6dda9bb8b37f", "attributes": {"data_source": {"type": "GeoJSONDataSource", "id": "c914f9f9-072c-4f32-89a6-5f74c9f7fe50"}, "nonselection_glyph": {"type": "Circle", "id": "55615d35-4f4a-4806-8077-8c27b279fb3e"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "79e83d25-1295-4553-aa2a-9bc494c7cb8d"}}}, {"type": "ResizeTool", "id": "01b19d6a-c427-40e1-8e79-1cbc18d8b9a5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64"}}}, {"type": "ToolEvents", "id": "224fdb26-a7b0-4c1d-82cd-6ef7967a944c", "attributes": {}}, {"type": "BasicTickFormatter", "id": "4ad3ac16-38f2-43a6-8328-4f39feabe7cf", "attributes": {}}, {"type": "Grid", "id": "9f95c55c-d921-4a00-91f0-ce12f4a31c84", "attributes": {"ticker": {"type": "BasicTicker", "id": "9b578a6a-4493-4967-9c14-9e84d1b7e256"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64"}}}, {"type": "PanTool", "id": "82dd5d03-3927-4bfb-9a43-1f676d96df49", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64"}}}, {"type": "ResetTool", "id": "a5c29582-c4e0-4ff3-aa9b-8a34c165e25a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64"}}}, {"type": "Circle", "id": "55615d35-4f4a-4806-8077-8c27b279fb3e", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BoxZoomTool", "id": "2323ff99-5532-4591-a03f-d528640d39bb", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "5cca7455-c187-4154-bb84-5facc2a7b75d"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64"}}}, {"type": "PreviewSaveTool", "id": "8a3b88a9-4dab-4a23-b011-4dd3d847e319", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64"}}}, {"type": "DataRange1d", "id": "e9ede35d-7350-446f-ac0e-18c8a75d4fa4", "attributes": {"callback": null}}, {"type": "Grid", "id": "315b4169-e6d3-4ccd-b478-9a29c9dd1e74", "attributes": {"ticker": {"type": "BasicTicker", "id": "4eb0b8ca-602a-40a7-9dfb-f69aabd115f4"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "41e20a1d-c872-424b-9add-c85bd8dc9c64"}}}, {"type": "Circle", "id": "79e83d25-1295-4553-aa2a-9bc494c7cb8d", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "line_alpha": {"value": 0.9}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.9}}}], "root_ids": ["41e20a1d-c872-424b-9add-c85bd8dc9c64"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "cbcbcbbe-90fe-4658-9d54-340bc68fa8e2", "modelid": "41e20a1d-c872-424b-9add-c85bd8dc9c64", "elementid": "57db3fe4-4720-424a-abe6-dc21090b8341"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));