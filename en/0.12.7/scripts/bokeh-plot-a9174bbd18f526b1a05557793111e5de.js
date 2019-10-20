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
      };var element = document.getElementById("a4e3acf5-ef76-4c2a-bd72-bee7e90571d3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a4e3acf5-ef76-4c2a-bd72-bee7e90571d3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"2bfa8889-75d2-4636-b06b-f92eb574c0f5":{"roots":{"references":[{"attributes":{"plot":{"id":"bca32074-f100-4646-a8ca-d08f6b816083","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4108cc8-e566-482c-9df0-c645b51abe50","type":"BasicTicker"}},"id":"b7a62692-4428-4bef-be67-a548b520f636","type":"Grid"},{"attributes":{},"id":"2406f5b1-2b87-44b5-b07f-d8c88559e290","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"940b025c-0ac7-4f88-adff-e574420bda81","type":"LinearAxis"}],"left":[{"id":"f534cc44-5297-4c8e-bb1d-353635efc9df","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"940b025c-0ac7-4f88-adff-e574420bda81","type":"LinearAxis"},{"id":"b7a62692-4428-4bef-be67-a548b520f636","type":"Grid"},{"id":"f534cc44-5297-4c8e-bb1d-353635efc9df","type":"LinearAxis"},{"id":"ca2fa06c-f135-4fff-9c97-cbfd9dc0374b","type":"Grid"},{"id":"cd80a144-9f52-48e9-933c-b1cd04e31e34","type":"BoxAnnotation"},{"id":"06274d24-addc-4846-a1af-85e923fa3065","type":"GlyphRenderer"}],"title":{"id":"a13f102d-906a-4652-a00e-b3ebb2debc17","type":"Title"},"toolbar":{"id":"8a9f475d-6cbf-4c40-89b0-244858a7351e","type":"Toolbar"},"x_range":{"id":"7f0534be-7617-4ac6-bc14-ab55115565f7","type":"DataRange1d"},"x_scale":{"id":"273af987-259c-49a0-9ab4-5e19189f792f","type":"LinearScale"},"y_range":{"id":"98fcb25a-7a92-4b6b-91b9-55579f22a6a4","type":"DataRange1d"},"y_scale":{"id":"5328859c-003b-4bcf-ad82-6bfdbdf8da78","type":"LinearScale"}},"id":"bca32074-f100-4646-a8ca-d08f6b816083","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"dbd7538e-fca9-4e4d-9976-29b41a8eff41","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4d485a5c-98de-4018-8dbe-117afdb1fc91","type":"PanTool"},{"id":"9bacfb22-f125-4d2b-81c9-7a0ff9791646","type":"WheelZoomTool"},{"id":"d971233d-1f69-4830-9512-f6bd10973f4c","type":"BoxZoomTool"},{"id":"dbd7538e-fca9-4e4d-9976-29b41a8eff41","type":"SaveTool"},{"id":"106732d6-f53c-42bb-a3fd-3c4bd52c62eb","type":"ResetTool"},{"id":"11395dbe-745e-4a9b-a634-5b785ddad125","type":"HelpTool"}]},"id":"8a9f475d-6cbf-4c40-89b0-244858a7351e","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"a13f102d-906a-4652-a00e-b3ebb2debc17","type":"Title"},{"attributes":{"formatter":{"id":"629dd14e-45f7-4719-b50d-8b86f1826995","type":"BasicTickFormatter"},"plot":{"id":"bca32074-f100-4646-a8ca-d08f6b816083","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4108cc8-e566-482c-9df0-c645b51abe50","type":"BasicTicker"}},"id":"940b025c-0ac7-4f88-adff-e574420bda81","type":"LinearAxis"},{"attributes":{"source":{"id":"6a2b7a36-00d3-4407-ad02-e4331cfd9f81","type":"ColumnDataSource"}},"id":"997cf61b-8003-4eb9-a1ba-125a896c5040","type":"CDSView"},{"attributes":{"callback":null},"id":"7f0534be-7617-4ac6-bc14-ab55115565f7","type":"DataRange1d"},{"attributes":{},"id":"4d485a5c-98de-4018-8dbe-117afdb1fc91","type":"PanTool"},{"attributes":{"data_source":{"id":"6a2b7a36-00d3-4407-ad02-e4331cfd9f81","type":"ColumnDataSource"},"glyph":{"id":"6bfd63a0-39f0-4bd0-81d0-fe812f31a6e8","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b720235d-917f-4989-b654-4b0c1cbafa18","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"997cf61b-8003-4eb9-a1ba-125a896c5040","type":"CDSView"}},"id":"06274d24-addc-4846-a1af-85e923fa3065","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"bca32074-f100-4646-a8ca-d08f6b816083","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ee41488-23e1-493b-8dc8-6872997f1b00","type":"BasicTicker"}},"id":"ca2fa06c-f135-4fff-9c97-cbfd9dc0374b","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"6bfd63a0-39f0-4bd0-81d0-fe812f31a6e8","type":"AnnularWedge"},{"attributes":{"callback":null},"id":"98fcb25a-7a92-4b6b-91b9-55579f22a6a4","type":"DataRange1d"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"b720235d-917f-4989-b654-4b0c1cbafa18","type":"AnnularWedge"},{"attributes":{},"id":"273af987-259c-49a0-9ab4-5e19189f792f","type":"LinearScale"},{"attributes":{},"id":"5328859c-003b-4bcf-ad82-6bfdbdf8da78","type":"LinearScale"},{"attributes":{"overlay":{"id":"cd80a144-9f52-48e9-933c-b1cd04e31e34","type":"BoxAnnotation"}},"id":"d971233d-1f69-4830-9512-f6bd10973f4c","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"6a2b7a36-00d3-4407-ad02-e4331cfd9f81","type":"ColumnDataSource"},{"attributes":{},"id":"9bacfb22-f125-4d2b-81c9-7a0ff9791646","type":"WheelZoomTool"},{"attributes":{},"id":"629dd14e-45f7-4719-b50d-8b86f1826995","type":"BasicTickFormatter"},{"attributes":{},"id":"8ee41488-23e1-493b-8dc8-6872997f1b00","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cd80a144-9f52-48e9-933c-b1cd04e31e34","type":"BoxAnnotation"},{"attributes":{},"id":"11395dbe-745e-4a9b-a634-5b785ddad125","type":"HelpTool"},{"attributes":{},"id":"e4108cc8-e566-482c-9df0-c645b51abe50","type":"BasicTicker"},{"attributes":{"formatter":{"id":"2406f5b1-2b87-44b5-b07f-d8c88559e290","type":"BasicTickFormatter"},"plot":{"id":"bca32074-f100-4646-a8ca-d08f6b816083","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ee41488-23e1-493b-8dc8-6872997f1b00","type":"BasicTicker"}},"id":"f534cc44-5297-4c8e-bb1d-353635efc9df","type":"LinearAxis"},{"attributes":{},"id":"106732d6-f53c-42bb-a3fd-3c4bd52c62eb","type":"ResetTool"}],"root_ids":["bca32074-f100-4646-a8ca-d08f6b816083"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"2bfa8889-75d2-4636-b06b-f92eb574c0f5","elementid":"a4e3acf5-ef76-4c2a-bd72-bee7e90571d3","modelid":"bca32074-f100-4646-a8ca-d08f6b816083"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
