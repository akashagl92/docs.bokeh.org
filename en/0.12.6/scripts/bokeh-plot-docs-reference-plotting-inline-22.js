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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("0c97f4ea-294c-4cbf-b154-40730311415d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0c97f4ea-294c-4cbf-b154-40730311415d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"0b6c5571-42dd-4035-a803-33f9f3266813":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fb913173-77ec-4f17-a599-5012f60c317b","type":"PanTool"},{"id":"672f1f89-c0ce-4931-9b52-17cbf37c31e7","type":"WheelZoomTool"},{"id":"c0c735f8-07b2-4a99-88ec-5c0933a54a10","type":"BoxZoomTool"},{"id":"29efb2da-aa35-4594-ad54-01b1e2b52da1","type":"SaveTool"},{"id":"17cd83b2-0023-4582-bc7c-6586b82616a1","type":"ResetTool"},{"id":"832396a6-2cc1-4470-a3f1-05aa2edb15cd","type":"HelpTool"}]},"id":"ebfab67e-d4c6-4ad8-b1cc-c9b8b434020c","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"51cece02-9b17-4fe5-b20e-0120954e57cb","type":"ColumnDataSource"},{"attributes":{},"id":"af5320db-9d3e-45cc-a5c4-eb6cd1149d41","type":"LinearScale"},{"attributes":{"plot":{"id":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41","subtype":"Figure","type":"Plot"}},"id":"672f1f89-c0ce-4931-9b52-17cbf37c31e7","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b502b26d-f199-4b30-8c7f-acb8923aee8c","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"5de5b522-226e-4494-8963-2eb0395ec88e","type":"Title"},{"attributes":{},"id":"0f71aba7-f953-43e0-b9e8-e4fe7acafa6d","type":"ToolEvents"},{"attributes":{"plot":{"id":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41","subtype":"Figure","type":"Plot"}},"id":"17cd83b2-0023-4582-bc7c-6586b82616a1","type":"ResetTool"},{"attributes":{"plot":{"id":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41","subtype":"Figure","type":"Plot"}},"id":"832396a6-2cc1-4470-a3f1-05aa2edb15cd","type":"HelpTool"},{"attributes":{},"id":"137397fe-efe2-4185-a0a7-b2b71ca5984b","type":"LinearScale"},{"attributes":{"plot":{"id":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41","subtype":"Figure","type":"Plot"}},"id":"29efb2da-aa35-4594-ad54-01b1e2b52da1","type":"SaveTool"},{"attributes":{"callback":null},"id":"01beb927-cc4d-4fe7-8589-909d7a1c001b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"733014c7-ec33-48d3-8448-141851f7c88a","type":"BasicTickFormatter"},"plot":{"id":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a719538-b638-43e8-9270-1cca70f2578a","type":"BasicTicker"}},"id":"fa93e8be-f514-46fa-9e5e-d099684fee1f","type":"LinearAxis"},{"attributes":{},"id":"733014c7-ec33-48d3-8448-141851f7c88a","type":"BasicTickFormatter"},{"attributes":{},"id":"5d4eaf26-197e-4379-abf6-5ec8a0355d1e","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3cc1d487-72c7-47dc-ae2c-b50070e93621","type":"BasicTickFormatter"},"plot":{"id":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d4eaf26-197e-4379-abf6-5ec8a0355d1e","type":"BasicTicker"}},"id":"fdee02c3-8ced-4b69-8c3b-fa52665feb20","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"173abdf8-6b7d-49a2-a22e-bd76b916324f","type":"SquareX"},{"attributes":{"callback":null},"id":"4dc1d552-ed9f-4ad7-8374-1aeea46b8d57","type":"DataRange1d"},{"attributes":{"data_source":{"id":"51cece02-9b17-4fe5-b20e-0120954e57cb","type":"ColumnDataSource"},"glyph":{"id":"1073d7b7-814c-4352-ae2c-7b79735e1ecb","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"173abdf8-6b7d-49a2-a22e-bd76b916324f","type":"SquareX"},"selection_glyph":null},"id":"f5d4da44-8995-482e-a11f-b6ee45465f55","type":"GlyphRenderer"},{"attributes":{},"id":"3cc1d487-72c7-47dc-ae2c-b50070e93621","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"b502b26d-f199-4b30-8c7f-acb8923aee8c","type":"BoxAnnotation"},"plot":{"id":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41","subtype":"Figure","type":"Plot"}},"id":"c0c735f8-07b2-4a99-88ec-5c0933a54a10","type":"BoxZoomTool"},{"attributes":{},"id":"6a719538-b638-43e8-9270-1cca70f2578a","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1073d7b7-814c-4352-ae2c-7b79735e1ecb","type":"SquareX"},{"attributes":{"below":[{"id":"fa93e8be-f514-46fa-9e5e-d099684fee1f","type":"LinearAxis"}],"left":[{"id":"fdee02c3-8ced-4b69-8c3b-fa52665feb20","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fa93e8be-f514-46fa-9e5e-d099684fee1f","type":"LinearAxis"},{"id":"333e978a-01ab-41ff-afe5-2399b45ab8ad","type":"Grid"},{"id":"fdee02c3-8ced-4b69-8c3b-fa52665feb20","type":"LinearAxis"},{"id":"bf04936b-5e30-46d8-b9bf-1e107a990b14","type":"Grid"},{"id":"b502b26d-f199-4b30-8c7f-acb8923aee8c","type":"BoxAnnotation"},{"id":"f5d4da44-8995-482e-a11f-b6ee45465f55","type":"GlyphRenderer"}],"title":{"id":"5de5b522-226e-4494-8963-2eb0395ec88e","type":"Title"},"tool_events":{"id":"0f71aba7-f953-43e0-b9e8-e4fe7acafa6d","type":"ToolEvents"},"toolbar":{"id":"ebfab67e-d4c6-4ad8-b1cc-c9b8b434020c","type":"Toolbar"},"x_range":{"id":"4dc1d552-ed9f-4ad7-8374-1aeea46b8d57","type":"DataRange1d"},"x_scale":{"id":"af5320db-9d3e-45cc-a5c4-eb6cd1149d41","type":"LinearScale"},"y_range":{"id":"01beb927-cc4d-4fe7-8589-909d7a1c001b","type":"DataRange1d"},"y_scale":{"id":"137397fe-efe2-4185-a0a7-b2b71ca5984b","type":"LinearScale"}},"id":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41","subtype":"Figure","type":"Plot"}},"id":"fb913173-77ec-4f17-a599-5012f60c317b","type":"PanTool"},{"attributes":{"plot":{"id":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a719538-b638-43e8-9270-1cca70f2578a","type":"BasicTicker"}},"id":"333e978a-01ab-41ff-afe5-2399b45ab8ad","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d4eaf26-197e-4379-abf6-5ec8a0355d1e","type":"BasicTicker"}},"id":"bf04936b-5e30-46d8-b9bf-1e107a990b14","type":"Grid"}],"root_ids":["2e711a97-7b1c-412e-ab0b-f223c1b7cc41"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"0b6c5571-42dd-4035-a803-33f9f3266813","elementid":"0c97f4ea-294c-4cbf-b154-40730311415d","modelid":"2e711a97-7b1c-412e-ab0b-f223c1b7cc41"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
