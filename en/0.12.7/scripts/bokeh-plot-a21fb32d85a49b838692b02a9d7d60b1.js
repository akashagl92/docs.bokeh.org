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
      };var element = document.getElementById("b7298dca-4095-4523-b3b1-916b4f5d3c63");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b7298dca-4095-4523-b3b1-916b4f5d3c63' but no matching script tag was found. ")
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
                var docs_json = {"8e67bfc2-ff68-4da2-8029-7ad902cb7845":{"roots":{"references":[{"attributes":{"plot":{"id":"7cede3b2-7cbb-4be0-8778-c1284f886124","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3d3f2ae-fe74-42ff-94aa-7a2134da50d7","type":"BasicTicker"}},"id":"808ea058-d47c-4715-873e-170bcf3115d1","type":"Grid"},{"attributes":{"overlay":{"id":"93668d69-5574-4b1a-8f5f-f570a701c7a2","type":"BoxAnnotation"}},"id":"bfe93056-99b4-42e3-bd70-bc979a0c3cc9","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"b3bd3e08-8e24-4929-921a-5ba6b80c9fa4","type":"BasicTickFormatter"},"plot":{"id":"7cede3b2-7cbb-4be0-8778-c1284f886124","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce410a0b-1da2-45d4-9ea9-9e06c34fb737","type":"BasicTicker"}},"id":"459d06b0-86f6-4e63-bc60-0868312788c2","type":"LinearAxis"},{"attributes":{},"id":"5a58016b-e9d2-4171-89be-ae97706e79b0","type":"SaveTool"},{"attributes":{},"id":"ce410a0b-1da2-45d4-9ea9-9e06c34fb737","type":"BasicTicker"},{"attributes":{},"id":"00040f13-8223-45cf-8584-f88cf0e0dc27","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"7cede3b2-7cbb-4be0-8778-c1284f886124","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce410a0b-1da2-45d4-9ea9-9e06c34fb737","type":"BasicTicker"}},"id":"f75ac0ec-fd97-4bf7-93b4-0dfd0d1324f9","type":"Grid"},{"attributes":{},"id":"b0cb66c0-4306-45c3-a05d-c37a90723a36","type":"ResetTool"},{"attributes":{},"id":"31b0057f-d827-4e9c-9b53-cc9908b9c077","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2bfac20b-b9fe-4079-8f68-e44425488ed4","type":"ColumnDataSource"},"glyph":{"id":"bd399d54-d4ae-4aaf-b082-46be78745c01","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98ee0bac-f6d6-40cd-b721-2dd962f3ad42","type":"Patch"},"selection_glyph":null,"view":{"id":"831bcd9f-1749-43b3-8cc0-613ebc9d3d7c","type":"CDSView"}},"id":"c1b0f5e8-21be-4ca7-a835-939223e6dbfd","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2bfac20b-b9fe-4079-8f68-e44425488ed4","type":"ColumnDataSource"}},"id":"831bcd9f-1749-43b3-8cc0-613ebc9d3d7c","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"2bfac20b-b9fe-4079-8f68-e44425488ed4","type":"ColumnDataSource"},{"attributes":{},"id":"f522138d-19b1-4189-966c-550bc1fce1f0","type":"PanTool"},{"attributes":{"below":[{"id":"8acd696f-fb88-4794-9589-d21d5ac0f757","type":"LinearAxis"}],"left":[{"id":"459d06b0-86f6-4e63-bc60-0868312788c2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8acd696f-fb88-4794-9589-d21d5ac0f757","type":"LinearAxis"},{"id":"808ea058-d47c-4715-873e-170bcf3115d1","type":"Grid"},{"id":"459d06b0-86f6-4e63-bc60-0868312788c2","type":"LinearAxis"},{"id":"f75ac0ec-fd97-4bf7-93b4-0dfd0d1324f9","type":"Grid"},{"id":"93668d69-5574-4b1a-8f5f-f570a701c7a2","type":"BoxAnnotation"},{"id":"c1b0f5e8-21be-4ca7-a835-939223e6dbfd","type":"GlyphRenderer"}],"title":{"id":"e42578a0-eeed-45a6-8bee-36837b52a8a8","type":"Title"},"toolbar":{"id":"7a1c1aa5-9ae6-4a03-a7dc-06766e1d13e3","type":"Toolbar"},"x_range":{"id":"057d9ab6-71bf-4bb1-a918-acd90275e309","type":"DataRange1d"},"x_scale":{"id":"c81f5cf9-268f-4e2e-93d0-fb07ba3b0e3c","type":"LinearScale"},"y_range":{"id":"4e0e171f-99af-44a3-b52b-4354ca9b2f93","type":"DataRange1d"},"y_scale":{"id":"0f9d3e24-97dd-425d-8581-71dfcabc4ebe","type":"LinearScale"}},"id":"7cede3b2-7cbb-4be0-8778-c1284f886124","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f522138d-19b1-4189-966c-550bc1fce1f0","type":"PanTool"},{"id":"47c3de69-9f58-4d86-a17f-e0511d01ce1c","type":"WheelZoomTool"},{"id":"bfe93056-99b4-42e3-bd70-bc979a0c3cc9","type":"BoxZoomTool"},{"id":"5a58016b-e9d2-4171-89be-ae97706e79b0","type":"SaveTool"},{"id":"b0cb66c0-4306-45c3-a05d-c37a90723a36","type":"ResetTool"},{"id":"00040f13-8223-45cf-8584-f88cf0e0dc27","type":"HelpTool"}]},"id":"7a1c1aa5-9ae6-4a03-a7dc-06766e1d13e3","type":"Toolbar"},{"attributes":{},"id":"47c3de69-9f58-4d86-a17f-e0511d01ce1c","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"057d9ab6-71bf-4bb1-a918-acd90275e309","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"bd399d54-d4ae-4aaf-b082-46be78745c01","type":"Patch"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"98ee0bac-f6d6-40cd-b721-2dd962f3ad42","type":"Patch"},{"attributes":{},"id":"e3d3f2ae-fe74-42ff-94aa-7a2134da50d7","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"e42578a0-eeed-45a6-8bee-36837b52a8a8","type":"Title"},{"attributes":{},"id":"c81f5cf9-268f-4e2e-93d0-fb07ba3b0e3c","type":"LinearScale"},{"attributes":{},"id":"b3bd3e08-8e24-4929-921a-5ba6b80c9fa4","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"4e0e171f-99af-44a3-b52b-4354ca9b2f93","type":"DataRange1d"},{"attributes":{},"id":"0f9d3e24-97dd-425d-8581-71dfcabc4ebe","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93668d69-5574-4b1a-8f5f-f570a701c7a2","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"31b0057f-d827-4e9c-9b53-cc9908b9c077","type":"BasicTickFormatter"},"plot":{"id":"7cede3b2-7cbb-4be0-8778-c1284f886124","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3d3f2ae-fe74-42ff-94aa-7a2134da50d7","type":"BasicTicker"}},"id":"8acd696f-fb88-4794-9589-d21d5ac0f757","type":"LinearAxis"}],"root_ids":["7cede3b2-7cbb-4be0-8778-c1284f886124"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"8e67bfc2-ff68-4da2-8029-7ad902cb7845","elementid":"b7298dca-4095-4523-b3b1-916b4f5d3c63","modelid":"7cede3b2-7cbb-4be0-8778-c1284f886124"}];
                
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
