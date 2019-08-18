(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("cb820247-5997-43b8-be62-b44abe8db1bf");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cb820247-5997-43b8-be62-b44abe8db1bf' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
      var css_urls = [];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"e3c44b1b-a2c6-48bc-a41a-a44a3a1e939c":{"roots":{"references":[{"attributes":{},"id":"23497","type":"BasicTicker"},{"attributes":{"data_source":{"id":"23486","type":"GeoJSONDataSource"},"glyph":{"id":"23522","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23523","type":"Circle"},"selection_glyph":null,"view":{"id":"23525","type":"CDSView"}},"id":"23524","type":"GlyphRenderer"},{"attributes":{"callback":null,"tooltips":[["Organisation","@OrganisationName"]]},"id":"23512","type":"HoverTool"},{"attributes":{},"id":"23502","type":"BasicTicker"},{"attributes":{},"id":"23528","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"23530","type":"BasicTickFormatter"},"ticker":{"id":"23502","type":"BasicTicker"}},"id":"23501","type":"LinearAxis"},{"attributes":{},"id":"23506","type":"PanTool"},{"attributes":{},"id":"23511","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"23502","type":"BasicTicker"}},"id":"23505","type":"Grid"},{"attributes":{},"id":"23509","type":"SaveTool"},{"attributes":{"overlay":{"id":"23534","type":"BoxAnnotation"}},"id":"23508","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"23497","type":"BasicTicker"}},"id":"23500","type":"Grid"},{"attributes":{"callback":null},"id":"23490","type":"DataRange1d"},{"attributes":{},"id":"23530","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23534","type":"BoxAnnotation"},{"attributes":{"text":""},"id":"23526","type":"Title"},{"attributes":{},"id":"23507","type":"WheelZoomTool"},{"attributes":{},"id":"23510","type":"ResetTool"},{"attributes":{},"id":"23494","type":"LinearScale"},{"attributes":{},"id":"23492","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"field":"Color"},"line_alpha":{"value":0.7},"line_color":{"field":"Color"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"23522","type":"Circle"},{"attributes":{"background_fill_color":{"value":"lightgrey"},"below":[{"id":"23496","type":"LinearAxis"}],"center":[{"id":"23500","type":"Grid"},{"id":"23505","type":"Grid"}],"left":[{"id":"23501","type":"LinearAxis"}],"renderers":[{"id":"23524","type":"GlyphRenderer"}],"title":{"id":"23526","type":"Title"},"toolbar":{"id":"23513","type":"Toolbar"},"x_range":{"id":"23488","type":"DataRange1d"},"x_scale":{"id":"23492","type":"LinearScale"},"y_range":{"id":"23490","type":"DataRange1d"},"y_scale":{"id":"23494","type":"LinearScale"}},"id":"23487","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"23523","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23506","type":"PanTool"},{"id":"23507","type":"WheelZoomTool"},{"id":"23508","type":"BoxZoomTool"},{"id":"23509","type":"SaveTool"},{"id":"23510","type":"ResetTool"},{"id":"23511","type":"HelpTool"},{"id":"23512","type":"HoverTool"}]},"id":"23513","type":"Toolbar"},{"attributes":{},"id":"23533","type":"Selection"},{"attributes":{"formatter":{"id":"23528","type":"BasicTickFormatter"},"ticker":{"id":"23497","type":"BasicTicker"}},"id":"23496","type":"LinearAxis"},{"attributes":{},"id":"23532","type":"UnionRenderers"},{"attributes":{"callback":null,"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"type\\": \\"Feature\\", \\"id\\": \\"463098\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-2.1208465099334717, 51.4613151550293]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q64\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Bath, Gloucestershire, Swindon And Wiltshire Area Team\\", \\"Address1\\": \\"1st Floor\\", \\"Address2\\": \\"Bewley House\\", \\"Address3\\": \\"Marshfield Road\\", \\"City\\": \\"Chippenham\\", \\"County\\": \\"Wiltshire\\", \\"Postcode\\": \\"SN15 1JW\\", \\"Phone\\": \\"0113 8251 500\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/south/south/bgsw-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463099\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-2.5929524898529053, 51.459877014160156]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q65\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Bristol, North Somerset, Somerset And South Gloucestershire Area Team\\", \\"Address1\\": \\"South Plaza\\", \\"Address3\\": \\"Marlborough Street\\", \\"City\\": \\"Bristol\\", \\"County\\": \\"Somerset\\", \\"Postcode\\": \\"BS1 3NX\\", \\"Phone\\": \\"0117 976 6600\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/south/south/bnsssg-at/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463100\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-4.232546806335449, 50.42112731933594]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q66\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Devon, Cornwall And Isles Of Scilly Area Team\\", \\"Address1\\": \\"Peninsula House\\", \\"Address2\\": \\"Kingsmill Road\\", \\"Address3\\": \\"Tamar View Industrial Estate\\", \\"City\\": \\"Cornwall\\", \\"County\\": \\"Cornwall\\", \\"Postcode\\": \\"PL12 6LE\\", \\"Phone\\": \\"01752 679250\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/south/south/dcis-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463101\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [0.27698493003845215, 51.193748474121094]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q67\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Kent And Medway Area Team\\", \\"Address1\\": \\"Wharf House\\", \\"Address2\\": \\"Medway Wharf Road\\", \\"City\\": \\"Tonbridge\\", \\"County\\": \\"Kent\\", \\"Postcode\\": \\"TN9 1RE\\", \\"Phone\\": \\"01732 375200\\", \\"Email\\": \\"england.kentandmedwaybusinessoffice@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/south/south/km-at/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463102\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-0.1647440642118454, 51.170936584472656]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q68\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Surrey And Sussex Area Team\\", \\"Address1\\": \\"York House\\", \\"Address2\\": \\"18-20 Massetts Road\\", \\"City\\": \\"Horley\\", \\"County\\": \\"Surrey\\", \\"Postcode\\": \\"RH6 7DE\\", \\"Phone\\": \\"01293 778899\\", \\"Email\\": \\"england.surreyandsussex-businessoffice@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/south/south/ss-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463103\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-1.2079498767852783, 51.72844696044922]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q69\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Thames Valley Area Team\\", \\"Address1\\": \\"Jubilee House\\", \\"Address2\\": \\"5510 John Smith Drive\\", \\"Address3\\": \\"Oxford Business Park South\\", \\"City\\": \\"Cowley\\", \\"County\\": \\"Oxfordshire\\", \\"Postcode\\": \\"OX4 2LH\\", \\"Phone\\": \\"01865 963800\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/south/south/tv-at/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463104\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-1.4493359327316284, 50.92325973510742]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q70\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Wessex Area Team\\", \\"Address2\\": \\"Oakley Road\\", \\"City\\": \\"Southampton\\", \\"County\\": \\"Hampshire\\", \\"Postcode\\": \\"SO16 4GX\\", \\"Phone\\": \\"023 8029 6914\\", \\"Email\\": \\"england.wessexpatientexperience@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/south/south/w-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463105\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-0.13727261126041412, 51.49694061279297]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q71\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"London Area Team\\", \\"Address2\\": \\"2nd Floor, Southside\\", \\"Address3\\": \\"105 Victoria Street\\", \\"City\\": \\"London\\", \\"Postcode\\": \\"SW1E 6QT\\", \\"Phone\\": \\"0207 932 3700\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/london/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463120\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-2.5846381187438965, 53.37392807006836]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q44\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Cheshire, Warrington And Wirral Area Team\\", \\"Address1\\": \\"NHS Quayside (NHS North West)\\", \\"Address2\\": \\"Wilderspool Park\\", \\"Address3\\": \\"Greensall Avenue\\", \\"City\\": \\"Warrington\\", \\"County\\": \\"Cheshire\\", \\"Postcode\\": \\"WA4 6HL\\", \\"Phone\\": \\"01925 406000\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/north/north/cww-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463121\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-1.5323498249053955, 53.79779815673828]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q45\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Durham, Darlington And Tees Area Team\\", \\"Address1\\": \\"The Old Exchange\\", \\"Address2\\": \\"Barnard Street\\", \\"City\\": \\"Darlington\\", \\"County\\": \\"Durham\\", \\"Postcode\\": \\"LS2 7UE\\", \\"Phone\\": \\"0113 825 1609\\", \\"Email\\": \\"england.ddt-at-generalenquiries@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/north/north/ddt-at/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463122\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-2.233488082885742, 53.47760009765625]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q46\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Greater Manchester Area Team\\", \\"Address1\\": \\"4th Floor\\", \\"Address2\\": \\"3 Picadilly Place\\", \\"Address3\\": \\"London Road\\", \\"City\\": \\"Manchester\\", \\"County\\": \\"Lancashire\\", \\"Postcode\\": \\"M1 3BN\\", \\"Phone\\": \\"0845 0500194\\", \\"Email\\": \\"nhse.gmat@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/north/north/gm-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463123\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-2.705566644668579, 53.77775573730469]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q47\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Lancashire Area Team\\", \\"Address1\\": \\"Second Floor, Preston Business Centre\\", \\"Address2\\": \\"Watling Street Road\\", \\"Address3\\": \\"Fulwood\\", \\"City\\": \\"Preston\\", \\"County\\": \\"Lancashire\\", \\"Postcode\\": \\"PR2 8DY\\", \\"Phone\\": \\"01772 420150\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/north/north/lanc-at/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463124\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-2.9802029132843018, 53.38481903076172]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q48\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Merseyside Area Team\\", \\"Address1\\": \\"Regatta Place\\", \\"Address2\\": \\"Summers Road\\", \\"Address3\\": \\"Brunswick Business Park\\", \\"City\\": \\"Liverpool\\", \\"County\\": \\"Merseyside\\", \\"Postcode\\": \\"L3 4BL\\", \\"Phone\\": \\"0151 285 4777\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/north/north/mers-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463125\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-1.7141016721725464, 54.96938705444336]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q49\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Cumbria, Northumberland, Tyne And Wear Area Team\\", \\"Address1\\": \\"Waterfront\\", \\"Address2\\": \\"4 Goldcrest Way\\", \\"Address3\\": \\"Newburn\\", \\"City\\": \\"Newcastle Upon Tyne\\", \\"County\\": \\"Tyne and Wear\\", \\"Postcode\\": \\"NE15 8NY\\", \\"Phone\\": \\"01912 106400\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/north/north/cntw-at/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463126\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-1.0497655868530273, 53.989986419677734]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q50\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"North Yorkshire And Humber Area Team\\", \\"Address1\\": \\"Unit 3\\", \\"Address2\\": \\"Alpha Court\\", \\"Address3\\": \\"Monks Cross\\", \\"City\\": \\"York\\", \\"County\\": \\"North Yorkshire\\", \\"Postcode\\": \\"YO32 9WN\\", \\"Phone\\": \\"0113 825 1845\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/north/north/nyh-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463127\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-1.2550956010818481, 53.42157745361328]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q51\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"South Yorkshire And Bassetlaw Area Team\\", \\"Address1\\": \\"Oak House\\", \\"Address2\\": \\"Moorhead Way\\", \\"Address3\\": \\"Bramley\\", \\"City\\": \\"Rotherham\\", \\"County\\": \\"South Yorkshire\\", \\"Postcode\\": \\"S66 1YY\\", \\"Phone\\": \\"01709 302000\\", \\"Email\\": \\"england.syb-businessoffice@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/north/north/syb-at/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463128\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-1.544582486152649, 53.78975296020508]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q52\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"West Yorkshire Area Team\\", \\"Address1\\": \\"3 Leeds City Office Park\\", \\"Address2\\": \\"Meadow Lane\\", \\"City\\": \\"Leeds\\", \\"County\\": \\"West Yorkshire\\", \\"Postcode\\": \\"LS11 5BD\\", \\"Phone\\": \\"0113 8252700\\", \\"Email\\": \\"reception.westyorkshireareateam@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/north/north/wy-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463129\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-2.1813161373138428, 52.18680953979492]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q53\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Arden, Herefordshire And Worcestershire Area Team\\", \\"Address2\\": \\"Wildwood\\", \\"Address3\\": \\"Wildwood Drive\\", \\"City\\": \\"Worcester\\", \\"County\\": \\"Worcestershire\\", \\"Postcode\\": \\"WR5 2LG\\", \\"Phone\\": \\"0113 825 3099\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/mids-east/mids-east-3/ahw-at/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463130\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-1.9351675510406494, 52.471920013427734]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q54\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Birmingham And The Black Country Area Team\\", \\"Address1\\": \\"St Chads Court\\", \\"Address2\\": \\"213 Hagley Road\\", \\"Address3\\": \\"Edgbaston\\", \\"City\\": \\"Birmingham\\", \\"County\\": \\"West Midlands\\", \\"Postcode\\": \\"B16 9RG\\", \\"Phone\\": \\"0121 695 2222\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/mids-east/mids-east-3/bsbc-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463131\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-1.1435775756835938, 53.12958526611328]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q55\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Derbyshire And Nottinghamshire Area Team\\", \\"Address1\\": \\"Birch House\\", \\"Address2\\": \\"Ransom Wood Business Park\\", \\"Address3\\": \\"Southwell Road West, Rainworth\\", \\"City\\": \\"Nottingham\\", \\"County\\": \\"Nottinghamshire\\", \\"Postcode\\": \\"NG21 0HJ\\", \\"Phone\\": \\"0300 300 1234\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/mids-east/mids-east-3/dn-at/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463132\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [0.19126050174236298, 52.18547821044922]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q56\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"East Anglia Area Team\\", \\"Address1\\": \\"CPC1\\", \\"Address2\\": \\"Capital Business Park\\", \\"Address3\\": \\"Fulbourn\\", \\"City\\": \\"Cambridge\\", \\"County\\": \\"Cambridgeshire\\", \\"Postcode\\": \\"CB21 5XE\\", \\"Phone\\": \\"01223 708700\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/mids-east/mids-east-3/ea-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463133\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [0.5076583027839661, 51.74932098388672]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q57\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Essex Area Team\\", \\"Address1\\": \\"Swift House\\", \\"Address2\\": \\"Hedgerows Business Park\\", \\"Address3\\": \\"Colchester Road, Springfield\\", \\"City\\": \\"Chelmsford\\", \\"County\\": \\"Essex\\", \\"Postcode\\": \\"CM2 5PF\\", \\"Phone\\": \\"01245 398770\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/mids-east/mids-east-3/essex-at/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463134\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-0.20884820818901062, 51.8019905090332]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q58\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Hertfordshire And The South Midlands Area Team\\", \\"Address1\\": \\"Charter House\\", \\"Address2\\": \\"Parkway\\", \\"City\\": \\"Welwyn Garden City\\", \\"County\\": \\"Hertfordshire\\", \\"Postcode\\": \\"AL8 6JL\\", \\"Phone\\": \\"01707 390855\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/mids-east/mids-east-3/hsm-at/\\", \\"Color\\": \\"blue\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463135\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-1.189500093460083, 52.593223571777344]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q59\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Leicestershire And Lincolnshire Area Team\\", \\"Address1\\": \\"Fosse House\\", \\"Address2\\": \\"6 Smith Way\\", \\"Address3\\": \\"Grove Park, Enderby\\", \\"City\\": \\"Leicester\\", \\"County\\": \\"Leicestershire\\", \\"Postcode\\": \\"LE19 1SX\\", \\"Phone\\": \\"0116 295 7500\\", \\"Email\\": \\"england.leicsandlincsareateam@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/mids-east/mids-east-3/ll-at/\\", \\"Color\\": \\"red\\"}}, {\\"type\\": \\"Feature\\", \\"id\\": \\"463136\\", \\"geometry\\": {\\"type\\": \\"Point\\", \\"coordinates\\": [-1.9140186309814453, 52.7487907409668]}, \\"properties\\": {\\"OrganisationCode\\": \\"Q60\\", \\"OrganisationType\\": \\"Area Team\\", \\"SubType\\": \\"UNKNOWN\\", \\"OrganisationStatus\\": \\"Visible\\", \\"IsPimsManaged\\": \\"True\\", \\"OrganisationName\\": \\"Shropshire And Staffordshire Area Team\\", \\"Address1\\": \\"Anglesey House,\\", \\"Address2\\": \\"Wheelhouse Road,\\", \\"Address3\\": \\"Towers Plaza,\\", \\"City\\": \\"Rugeley,\\", \\"County\\": \\"Staffordshire\\", \\"Postcode\\": \\"WS15 1UL\\", \\"Phone\\": \\"0300 7900233\\", \\"Email\\": \\"england.contactus@nhs.net\\", \\"Website\\": \\"http://www.england.nhs.uk/mids-east/mids-east-3/ss-at/\\", \\"Color\\": \\"blue\\"}}]}","selected":{"id":"23533","type":"Selection"},"selection_policy":{"id":"23532","type":"UnionRenderers"}},"id":"23486","type":"GeoJSONDataSource"},{"attributes":{"source":{"id":"23486","type":"GeoJSONDataSource"}},"id":"23525","type":"CDSView"},{"attributes":{"callback":null},"id":"23488","type":"DataRange1d"}],"root_ids":["23487"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"e3c44b1b-a2c6-48bc-a41a-a44a3a1e939c","roots":{"23487":"cb820247-5997-43b8-be62-b44abe8db1bf"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();