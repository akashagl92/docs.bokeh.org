(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("756d81f0-4cdb-4629-af77-8ab4261e07b4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '756d81f0-4cdb-4629-af77-8ab4261e07b4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"b09b94b9-d2a3-43bf-9f51-01849401f41e":{"roots":{"references":[{"attributes":{},"id":"86f31bc6-da02-4bae-ab70-960ec4a3d938","type":"BasicTicker"},{"attributes":{},"id":"f8cd4d95-4610-45de-be47-3279b535804f","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"8b1e6af0-56de-4094-a2b4-b2820ac19d8b","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"de40dd16-d7b4-499e-b8c0-ef1370b5f9a5","type":"Stack"}},"y":{"field":"fruits"}},"id":"0d88a1d7-1280-48cf-a6d1-dec4d44164cb","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"4f29f0dd-5911-4438-b547-1235bf4537f9","type":"Stack"},{"attributes":{"data_source":{"id":"d3860b63-afa4-45cb-8c62-bb196a296b35","type":"ColumnDataSource"},"glyph":{"id":"3361d79b-69a6-46b0-8e88-de6ceb9bb14f","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0d88a1d7-1280-48cf-a6d1-dec4d44164cb","type":"HBar"},"selection_glyph":null,"view":{"id":"ac41f4f3-96e7-43b0-b5d8-b52b9c87eaaa","type":"CDSView"}},"id":"24637ae2-5e2e-4921-bbc7-fcd792377272","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"7dc05dac-5abb-4feb-98d2-e91db0bd7905","type":"Stack"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f2db53e2-2b25-47b0-8012-1048be9ade4d","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"f2db53e2-2b25-47b0-8012-1048be9ade4d","type":"BoxAnnotation"}},"id":"2e869935-5f09-4305-85ff-0ffb18734eba","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"ab0b2a1d-b063-47a8-8641-894812df48d7","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"80464fc6-59c4-4ac0-94c0-d8af83768083","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ce93624-796f-4ce3-968c-ebff71f2d93d","type":"CategoricalTicker"}},"id":"ea5c5087-fda6-4ff3-a4e0-476d060302fb","type":"CategoricalAxis"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"f006c893-f4ba-4e34-8b1e-5a9917ac1fa2","type":"GlyphRenderer"}]},"id":"f8dc08fb-0dac-47cf-bc90-7c2319650880","type":"LegendItem"},{"attributes":{"fields":[]},"id":"8b1e6af0-56de-4094-a2b4-b2820ac19d8b","type":"Stack"},{"attributes":{"source":{"id":"7f24bd9b-331e-48ab-88fd-fdd91130af79","type":"ColumnDataSource"}},"id":"850297ac-ebf3-4513-b65f-fe7a32e281d9","type":"CDSView"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"3e95d90f-3df9-47aa-a7fb-a9e0eb707c65","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"4f29f0dd-5911-4438-b547-1235bf4537f9","type":"Stack"}},"y":{"field":"fruits"}},"id":"4d86e064-0bc0-4d6b-88d3-d621a99fb7c5","type":"HBar"},{"attributes":{"data_source":{"id":"d3860b63-afa4-45cb-8c62-bb196a296b35","type":"ColumnDataSource"},"glyph":{"id":"306b5f52-ef0a-4bb7-b09a-7fb75f4e1c53","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"be40e7f6-d798-48fc-884a-a089195470b1","type":"HBar"},"selection_glyph":null,"view":{"id":"896f8037-b6e1-449d-839d-622e529a42f5","type":"CDSView"}},"id":"6e2946d8-d906-4104-a0ed-2128e97a8349","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"de40dd16-d7b4-499e-b8c0-ef1370b5f9a5","type":"Stack"},{"attributes":{"fields":[]},"id":"a80b08be-5079-4df1-8473-40e646a57c47","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"1421c549-4799-4101-afbb-873e21ec156c","type":"Stack"},{"attributes":{"plot":{"id":"80464fc6-59c4-4ac0-94c0-d8af83768083","subtype":"Figure","type":"Plot"},"ticker":{"id":"86f31bc6-da02-4bae-ab70-960ec4a3d938","type":"BasicTicker"}},"id":"acc287ee-0cb8-42ca-8527-4003520a24a1","type":"Grid"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"c77f2a2c-3a1a-47aa-b2f3-1a7afdec71a4","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"f01154e1-5d6d-41e9-8088-337e869e6852","type":"Stack"}},"y":{"field":"fruits"}},"id":"306b5f52-ef0a-4bb7-b09a-7fb75f4e1c53","type":"HBar"},{"attributes":{},"id":"ab0b2a1d-b063-47a8-8641-894812df48d7","type":"CategoricalTickFormatter"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"a9af9476-116e-460d-8ca0-219edadd436a","type":"GlyphRenderer"}]},"id":"0fa7f34c-fd59-45cf-805a-771211712754","type":"LegendItem"},{"attributes":{"fields":["2015","2016","2017"]},"id":"d34e47ed-d171-4722-9745-23cc1c0d1b92","type":"Stack"},{"attributes":{},"id":"5ce93624-796f-4ce3-968c-ebff71f2d93d","type":"CategoricalTicker"},{"attributes":{"source":{"id":"d3860b63-afa4-45cb-8c62-bb196a296b35","type":"ColumnDataSource"}},"id":"ac41f4f3-96e7-43b0-b5d8-b52b9c87eaaa","type":"CDSView"},{"attributes":{"fields":["2015"]},"id":"94d54d83-6d0a-46cb-877e-f8057ae0acbe","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"c77f2a2c-3a1a-47aa-b2f3-1a7afdec71a4","type":"Stack"},{"attributes":{"source":{"id":"d3860b63-afa4-45cb-8c62-bb196a296b35","type":"ColumnDataSource"}},"id":"896f8037-b6e1-449d-839d-622e529a42f5","type":"CDSView"},{"attributes":{},"id":"95d82ebb-3fdc-4058-8620-b7edaa4c4444","type":"LinearScale"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"24637ae2-5e2e-4921-bbc7-fcd792377272","type":"GlyphRenderer"}]},"id":"686b0b7b-3120-4324-8dd1-1edbe58d4705","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"a80b08be-5079-4df1-8473-40e646a57c47","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"94d54d83-6d0a-46cb-877e-f8057ae0acbe","type":"Stack"}},"y":{"field":"fruits"}},"id":"5a2932cc-2444-487b-8084-bd9fa5c4ec2e","type":"HBar"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"6e2946d8-d906-4104-a0ed-2128e97a8349","type":"GlyphRenderer"}]},"id":"147b1c88-ae94-4b10-920d-83a901d6726e","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"3e95d90f-3df9-47aa-a7fb-a9e0eb707c65","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"4f29f0dd-5911-4438-b547-1235bf4537f9","type":"Stack"}},"y":{"field":"fruits"}},"id":"061d7f49-3827-4b1c-bf19-ab4d9011473c","type":"HBar"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"7dc05dac-5abb-4feb-98d2-e91db0bd7905","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"1421c549-4799-4101-afbb-873e21ec156c","type":"Stack"}},"y":{"field":"fruits"}},"id":"63b2ac41-f3b6-440d-b15e-c526fbfe3edf","type":"HBar"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"f7c3ad3d-064b-446c-8265-314e3608ca2a","type":"Title"},{"attributes":{"data_source":{"id":"7f24bd9b-331e-48ab-88fd-fdd91130af79","type":"ColumnDataSource"},"glyph":{"id":"890990f2-40b5-408a-b9f6-17c11721358b","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5a2932cc-2444-487b-8084-bd9fa5c4ec2e","type":"HBar"},"selection_glyph":null,"view":{"id":"094d6377-36a4-48ff-aa8c-d28a3e4c38ef","type":"CDSView"}},"id":"f006c893-f4ba-4e34-8b1e-5a9917ac1fa2","type":"GlyphRenderer"},{"attributes":{},"id":"771d4432-b89d-4d11-bca3-0e14c5ed8b81","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d3860b63-afa4-45cb-8c62-bb196a296b35","type":"ColumnDataSource"},"glyph":{"id":"63b2ac41-f3b6-440d-b15e-c526fbfe3edf","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8f09bd0e-608f-4f07-bd39-695cca9a5ad6","type":"HBar"},"selection_glyph":null,"view":{"id":"212cbef7-0181-411d-9fdd-306d66c7ad95","type":"CDSView"}},"id":"9e350381-eef0-4918-a995-de786c38fc1b","type":"GlyphRenderer"},{"attributes":{},"id":"618303a9-0103-4495-8cfe-d0fcacb0c1d1","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"7dc05dac-5abb-4feb-98d2-e91db0bd7905","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"1421c549-4799-4101-afbb-873e21ec156c","type":"Stack"}},"y":{"field":"fruits"}},"id":"8f09bd0e-608f-4f07-bd39-695cca9a5ad6","type":"HBar"},{"attributes":{},"id":"4ecbfdf2-4d28-48b3-9de0-5a3dbdc40504","type":"ResetTool"},{"attributes":{},"id":"e9bb8359-9f97-4382-8010-041cb704527f","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"8b1e6af0-56de-4094-a2b4-b2820ac19d8b","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"de40dd16-d7b4-499e-b8c0-ef1370b5f9a5","type":"Stack"}},"y":{"field":"fruits"}},"id":"3361d79b-69a6-46b0-8e88-de6ceb9bb14f","type":"HBar"},{"attributes":{"formatter":{"id":"771d4432-b89d-4d11-bca3-0e14c5ed8b81","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"80464fc6-59c4-4ac0-94c0-d8af83768083","subtype":"Figure","type":"Plot"},"ticker":{"id":"86f31bc6-da02-4bae-ab70-960ec4a3d938","type":"BasicTicker"}},"id":"b726f2e0-b965-4d2e-9b97-7bbac364dd1d","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"a80b08be-5079-4df1-8473-40e646a57c47","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"94d54d83-6d0a-46cb-877e-f8057ae0acbe","type":"Stack"}},"y":{"field":"fruits"}},"id":"890990f2-40b5-408a-b9f6-17c11721358b","type":"HBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"821db745-d3d4-4581-b77d-68e5bee2a259","type":"FactorRange"},{"attributes":{"items":[{"id":"f8dc08fb-0dac-47cf-bc90-7c2319650880","type":"LegendItem"},{"id":"5862d128-86b9-4525-8716-c1c8c42b3550","type":"LegendItem"},{"id":"0fa7f34c-fd59-45cf-805a-771211712754","type":"LegendItem"},{"id":"686b0b7b-3120-4324-8dd1-1edbe58d4705","type":"LegendItem"},{"id":"b18ecc1b-ca89-423e-9508-b4421819584b","type":"LegendItem"},{"id":"147b1c88-ae94-4b10-920d-83a901d6726e","type":"LegendItem"}],"location":"top_left","plot":{"id":"80464fc6-59c4-4ac0-94c0-d8af83768083","subtype":"Figure","type":"Plot"}},"id":"452130c0-f303-45e3-b872-42d38c13f301","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"d8cc780a-aec3-43d8-8e86-919372267c4f","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"d34e47ed-d171-4722-9745-23cc1c0d1b92","type":"Stack"}},"y":{"field":"fruits"}},"id":"c415978a-0225-452e-9f35-cac241488be5","type":"HBar"},{"attributes":{"below":[{"id":"b726f2e0-b965-4d2e-9b97-7bbac364dd1d","type":"LinearAxis"}],"left":[{"id":"ea5c5087-fda6-4ff3-a4e0-476d060302fb","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"b726f2e0-b965-4d2e-9b97-7bbac364dd1d","type":"LinearAxis"},{"id":"acc287ee-0cb8-42ca-8527-4003520a24a1","type":"Grid"},{"id":"ea5c5087-fda6-4ff3-a4e0-476d060302fb","type":"CategoricalAxis"},{"id":"46578e9e-dda9-477a-88f4-ab47209b84e8","type":"Grid"},{"id":"f2db53e2-2b25-47b0-8012-1048be9ade4d","type":"BoxAnnotation"},{"id":"452130c0-f303-45e3-b872-42d38c13f301","type":"Legend"},{"id":"f006c893-f4ba-4e34-8b1e-5a9917ac1fa2","type":"GlyphRenderer"},{"id":"cd8bb632-e706-46ca-83c0-d1653f3ba110","type":"GlyphRenderer"},{"id":"a9af9476-116e-460d-8ca0-219edadd436a","type":"GlyphRenderer"},{"id":"24637ae2-5e2e-4921-bbc7-fcd792377272","type":"GlyphRenderer"},{"id":"9e350381-eef0-4918-a995-de786c38fc1b","type":"GlyphRenderer"},{"id":"6e2946d8-d906-4104-a0ed-2128e97a8349","type":"GlyphRenderer"}],"title":{"id":"f7c3ad3d-064b-446c-8265-314e3608ca2a","type":"Title"},"toolbar":{"id":"96c86c10-1dd1-4c46-887c-fa7cce1c425f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0208d921-62e0-47e1-80bf-4a1690bbf8ec","type":"Range1d"},"x_scale":{"id":"95d82ebb-3fdc-4058-8620-b7edaa4c4444","type":"LinearScale"},"y_range":{"id":"821db745-d3d4-4581-b77d-68e5bee2a259","type":"FactorRange"},"y_scale":{"id":"e9bb8359-9f97-4382-8010-041cb704527f","type":"CategoricalScale"}},"id":"80464fc6-59c4-4ac0-94c0-d8af83768083","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"7f24bd9b-331e-48ab-88fd-fdd91130af79","type":"ColumnDataSource"},"glyph":{"id":"da23831f-a733-45d2-a231-af56d3e96db3","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c415978a-0225-452e-9f35-cac241488be5","type":"HBar"},"selection_glyph":null,"view":{"id":"e104e5a6-c37d-4bfa-b477-392488674dd8","type":"CDSView"}},"id":"a9af9476-116e-460d-8ca0-219edadd436a","type":"GlyphRenderer"},{"attributes":{"fields":["2015","2016","2017"]},"id":"f01154e1-5d6d-41e9-8088-337e869e6852","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"c77f2a2c-3a1a-47aa-b2f3-1a7afdec71a4","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"f01154e1-5d6d-41e9-8088-337e869e6852","type":"Stack"}},"y":{"field":"fruits"}},"id":"be40e7f6-d798-48fc-884a-a089195470b1","type":"HBar"},{"attributes":{"source":{"id":"7f24bd9b-331e-48ab-88fd-fdd91130af79","type":"ColumnDataSource"}},"id":"094d6377-36a4-48ff-aa8c-d28a3e4c38ef","type":"CDSView"},{"attributes":{"source":{"id":"d3860b63-afa4-45cb-8c62-bb196a296b35","type":"ColumnDataSource"}},"id":"212cbef7-0181-411d-9fdd-306d66c7ad95","type":"CDSView"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"0208d921-62e0-47e1-80bf-4a1690bbf8ec","type":"Range1d"},{"attributes":{},"id":"372a9146-58b1-4cdf-b66b-f7e3af0e8f55","type":"WheelZoomTool"},{"attributes":{"fields":["2015","2016"]},"id":"d8cc780a-aec3-43d8-8e86-919372267c4f","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e41169cc-2b39-476d-b703-22b249d7efd3","type":"PanTool"},{"id":"372a9146-58b1-4cdf-b66b-f7e3af0e8f55","type":"WheelZoomTool"},{"id":"2e869935-5f09-4305-85ff-0ffb18734eba","type":"BoxZoomTool"},{"id":"618303a9-0103-4495-8cfe-d0fcacb0c1d1","type":"SaveTool"},{"id":"4ecbfdf2-4d28-48b3-9de0-5a3dbdc40504","type":"ResetTool"},{"id":"f8cd4d95-4610-45de-be47-3279b535804f","type":"HelpTool"}]},"id":"96c86c10-1dd1-4c46-887c-fa7cce1c425f","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"80464fc6-59c4-4ac0-94c0-d8af83768083","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ce93624-796f-4ce3-968c-ebff71f2d93d","type":"CategoricalTicker"}},"id":"46578e9e-dda9-477a-88f4-ab47209b84e8","type":"Grid"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"9e350381-eef0-4918-a995-de786c38fc1b","type":"GlyphRenderer"}]},"id":"b18ecc1b-ca89-423e-9508-b4421819584b","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"d8cc780a-aec3-43d8-8e86-919372267c4f","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"d34e47ed-d171-4722-9745-23cc1c0d1b92","type":"Stack"}},"y":{"field":"fruits"}},"id":"da23831f-a733-45d2-a231-af56d3e96db3","type":"HBar"},{"attributes":{"data_source":{"id":"7f24bd9b-331e-48ab-88fd-fdd91130af79","type":"ColumnDataSource"},"glyph":{"id":"4d86e064-0bc0-4d6b-88d3-d621a99fb7c5","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"061d7f49-3827-4b1c-bf19-ab4d9011473c","type":"HBar"},"selection_glyph":null,"view":{"id":"850297ac-ebf3-4513-b65f-fe7a32e281d9","type":"CDSView"}},"id":"cd8bb632-e706-46ca-83c0-d1653f3ba110","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"3e95d90f-3df9-47aa-a7fb-a9e0eb707c65","type":"Stack"},{"attributes":{"source":{"id":"7f24bd9b-331e-48ab-88fd-fdd91130af79","type":"ColumnDataSource"}},"id":"e104e5a6-c37d-4bfa-b477-392488674dd8","type":"CDSView"},{"attributes":{},"id":"e41169cc-2b39-476d-b703-22b249d7efd3","type":"PanTool"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"cd8bb632-e706-46ca-83c0-d1653f3ba110","type":"GlyphRenderer"}]},"id":"5862d128-86b9-4525-8716-c1c8c42b3550","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"d3860b63-afa4-45cb-8c62-bb196a296b35","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"7f24bd9b-331e-48ab-88fd-fdd91130af79","type":"ColumnDataSource"}],"root_ids":["80464fc6-59c4-4ac0-94c0-d8af83768083"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"b09b94b9-d2a3-43bf-9f51-01849401f41e","elementid":"756d81f0-4cdb-4629-af77-8ab4261e07b4","modelid":"80464fc6-59c4-4ac0-94c0-d8af83768083"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
