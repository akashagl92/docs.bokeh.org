(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("adf71f2c-4e36-488d-831e-d4e4ab1bc97f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'adf71f2c-4e36-488d-831e-d4e4ab1bc97f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"a6e5fa67-2b7f-47b8-ad49-e9488080799f":{"roots":{"references":[{"attributes":{"overlay":{"id":"f763bcba-41e6-4002-a994-5812c2005c4f","type":"BoxAnnotation"},"plot":{"id":"0b32a741-b8ff-4f00-bdd7-4a5d35083341","subtype":"Figure","type":"Plot"}},"id":"42b1bbe6-3ca2-4ac9-9907-58416bc40391","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f7e5ad9d-d712-488f-84a2-2581546ea8f2","type":"PanTool"},{"id":"5633ca63-434d-4773-a0cf-f6a49b5fb2be","type":"WheelZoomTool"},{"id":"42b1bbe6-3ca2-4ac9-9907-58416bc40391","type":"BoxZoomTool"},{"id":"44d775d2-fc3e-48f3-aff6-a7d7c8f7d106","type":"SaveTool"},{"id":"64e65d67-7cc3-4900-8e8b-515950180a8d","type":"ResetTool"},{"id":"e2596ced-2676-4ffd-91c1-cb3e4fb56be8","type":"HelpTool"}]},"id":"4b88c08b-d38f-4f5d-b97c-8879a539198b","type":"Toolbar"},{"attributes":{},"id":"353f3bd1-2756-442d-be6f-3815ca814dc9","type":"BasicTicker"},{"attributes":{"plot":{"id":"0b32a741-b8ff-4f00-bdd7-4a5d35083341","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d3fa277-012c-4e72-a7f5-a74dc1e6953b","type":"BasicTicker"}},"id":"0cde1d6a-9e4b-4d29-95ce-a69d6607b2d7","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f763bcba-41e6-4002-a994-5812c2005c4f","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"bc87d16c-0379-4df1-a4eb-d97860ea8b92","type":"DataRange1d"},{"attributes":{"data_source":{"id":"52737b44-c11d-40db-a27f-8b65b8f3bb24","type":"ColumnDataSource"},"glyph":{"id":"d47455c4-8ad4-40b7-832c-628422263389","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"efc3245d-e0e3-442a-bf2c-20b376423aa2","type":"HBar"},"selection_glyph":null},"id":"09b1a3a8-aa56-418b-b171-38f99257b906","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0b32a741-b8ff-4f00-bdd7-4a5d35083341","subtype":"Figure","type":"Plot"}},"id":"64e65d67-7cc3-4900-8e8b-515950180a8d","type":"ResetTool"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"d47455c4-8ad4-40b7-832c-628422263389","type":"HBar"},{"attributes":{},"id":"413f6325-b5a6-4700-94cd-b49f5646f870","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0b32a741-b8ff-4f00-bdd7-4a5d35083341","subtype":"Figure","type":"Plot"}},"id":"44d775d2-fc3e-48f3-aff6-a7d7c8f7d106","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"afa6e776-544a-4b3c-bb09-a424d55ca719","type":"Title"},{"attributes":{"formatter":{"id":"413f6325-b5a6-4700-94cd-b49f5646f870","type":"BasicTickFormatter"},"plot":{"id":"0b32a741-b8ff-4f00-bdd7-4a5d35083341","subtype":"Figure","type":"Plot"},"ticker":{"id":"353f3bd1-2756-442d-be6f-3815ca814dc9","type":"BasicTicker"}},"id":"7f258dad-18d7-410b-9d4e-edff08683032","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["right","y"],"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]}},"id":"52737b44-c11d-40db-a27f-8b65b8f3bb24","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"efc3245d-e0e3-442a-bf2c-20b376423aa2","type":"HBar"},{"attributes":{"formatter":{"id":"e8a9336a-f0df-41d7-a045-2afe6976b2e5","type":"BasicTickFormatter"},"plot":{"id":"0b32a741-b8ff-4f00-bdd7-4a5d35083341","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d3fa277-012c-4e72-a7f5-a74dc1e6953b","type":"BasicTicker"}},"id":"6bb88f36-0117-4813-9dfc-1086527bf765","type":"LinearAxis"},{"attributes":{"plot":{"id":"0b32a741-b8ff-4f00-bdd7-4a5d35083341","subtype":"Figure","type":"Plot"}},"id":"e2596ced-2676-4ffd-91c1-cb3e4fb56be8","type":"HelpTool"},{"attributes":{"plot":{"id":"0b32a741-b8ff-4f00-bdd7-4a5d35083341","subtype":"Figure","type":"Plot"}},"id":"f7e5ad9d-d712-488f-84a2-2581546ea8f2","type":"PanTool"},{"attributes":{"below":[{"id":"6bb88f36-0117-4813-9dfc-1086527bf765","type":"LinearAxis"}],"left":[{"id":"7f258dad-18d7-410b-9d4e-edff08683032","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6bb88f36-0117-4813-9dfc-1086527bf765","type":"LinearAxis"},{"id":"0cde1d6a-9e4b-4d29-95ce-a69d6607b2d7","type":"Grid"},{"id":"7f258dad-18d7-410b-9d4e-edff08683032","type":"LinearAxis"},{"id":"133f4a8d-f846-4a90-936c-3b6d686280d2","type":"Grid"},{"id":"f763bcba-41e6-4002-a994-5812c2005c4f","type":"BoxAnnotation"},{"id":"09b1a3a8-aa56-418b-b171-38f99257b906","type":"GlyphRenderer"}],"title":{"id":"afa6e776-544a-4b3c-bb09-a424d55ca719","type":"Title"},"tool_events":{"id":"6d46f394-e91a-4f7e-9b3a-40cb06dbd1c3","type":"ToolEvents"},"toolbar":{"id":"4b88c08b-d38f-4f5d-b97c-8879a539198b","type":"Toolbar"},"x_range":{"id":"4725d11b-c59f-4467-be8f-f7a2d243e79f","type":"DataRange1d"},"y_range":{"id":"bc87d16c-0379-4df1-a4eb-d97860ea8b92","type":"DataRange1d"}},"id":"0b32a741-b8ff-4f00-bdd7-4a5d35083341","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e8a9336a-f0df-41d7-a045-2afe6976b2e5","type":"BasicTickFormatter"},{"attributes":{},"id":"6d46f394-e91a-4f7e-9b3a-40cb06dbd1c3","type":"ToolEvents"},{"attributes":{},"id":"5d3fa277-012c-4e72-a7f5-a74dc1e6953b","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0b32a741-b8ff-4f00-bdd7-4a5d35083341","subtype":"Figure","type":"Plot"},"ticker":{"id":"353f3bd1-2756-442d-be6f-3815ca814dc9","type":"BasicTicker"}},"id":"133f4a8d-f846-4a90-936c-3b6d686280d2","type":"Grid"},{"attributes":{"callback":null},"id":"4725d11b-c59f-4467-be8f-f7a2d243e79f","type":"DataRange1d"},{"attributes":{"plot":{"id":"0b32a741-b8ff-4f00-bdd7-4a5d35083341","subtype":"Figure","type":"Plot"}},"id":"5633ca63-434d-4773-a0cf-f6a49b5fb2be","type":"WheelZoomTool"}],"root_ids":["0b32a741-b8ff-4f00-bdd7-4a5d35083341"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"a6e5fa67-2b7f-47b8-ad49-e9488080799f","elementid":"adf71f2c-4e36-488d-831e-d4e4ab1bc97f","modelid":"0b32a741-b8ff-4f00-bdd7-4a5d35083341"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
