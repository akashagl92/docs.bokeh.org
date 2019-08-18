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
      };var element = document.getElementById("79be5f1b-c8ad-43d5-a846-acfadfc53ca1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '79be5f1b-c8ad-43d5-a846-acfadfc53ca1' but no matching script tag was found. ")
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
                var docs_json = {"3a46b25f-3949-42dc-a33c-46c7d9a82bfa":{"roots":{"references":[{"attributes":{},"id":"04bc45da-efcf-4392-b2ec-2f11ecedc84a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d2e05869-a26a-4e02-aa4c-30de0d71bf54","type":"DataRange1d"},{"attributes":{"overlay":{"id":"43d79871-4ed9-4904-bba5-6ab036af5ea4","type":"BoxAnnotation"}},"id":"3f1f1fa9-4a47-4f71-a42f-4bfde1e8be92","type":"BoxZoomTool"},{"attributes":{},"id":"fd6dfd2e-b38f-431a-9c9f-0952e47898e3","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"43d79871-4ed9-4904-bba5-6ab036af5ea4","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"dd3e7289-f4a6-4510-a82e-231b217d7d42","type":"LinearAxis"}],"left":[{"id":"c73e3d1d-e89b-4aab-82f9-42484a512eed","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"dd3e7289-f4a6-4510-a82e-231b217d7d42","type":"LinearAxis"},{"id":"952b1b61-f80a-46df-a263-282f0ef27aca","type":"Grid"},{"id":"c73e3d1d-e89b-4aab-82f9-42484a512eed","type":"LinearAxis"},{"id":"71697d4f-ae7e-496d-87dd-c409da2abb50","type":"Grid"},{"id":"43d79871-4ed9-4904-bba5-6ab036af5ea4","type":"BoxAnnotation"},{"id":"05aa0548-5992-4212-b5d7-9ffca5a1098f","type":"GlyphRenderer"}],"title":{"id":"62938562-17ef-40bc-81d9-afde393c0a8f","type":"Title"},"toolbar":{"id":"402783a0-af3f-4fae-8e5d-40446ef14bcd","type":"Toolbar"},"x_range":{"id":"d2e05869-a26a-4e02-aa4c-30de0d71bf54","type":"DataRange1d"},"x_scale":{"id":"fdf25fe1-4447-4e28-ab5e-62d9e2f1bf43","type":"LinearScale"},"y_range":{"id":"7670d29b-bd76-451f-bea6-2fc30708d178","type":"DataRange1d"},"y_scale":{"id":"3ec95f4a-094f-4aba-973f-e9ea24b90bbe","type":"LinearScale"}},"id":"d5bb8f5f-4657-4c07-a451-4f3cf3aa335f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fdf25fe1-4447-4e28-ab5e-62d9e2f1bf43","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"91100498-0630-4635-875e-b1c4659912e7","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fd36c3fd-8a03-4068-a69b-5e1b0a2c48c5","type":"PanTool"},{"id":"d4b5a242-0fba-4778-a0e5-49f9f5defde7","type":"WheelZoomTool"},{"id":"3f1f1fa9-4a47-4f71-a42f-4bfde1e8be92","type":"BoxZoomTool"},{"id":"c5e654b9-ce0a-415e-bc6e-feed0b232d08","type":"SaveTool"},{"id":"fd6dfd2e-b38f-431a-9c9f-0952e47898e3","type":"ResetTool"},{"id":"727a4d02-38e1-4d54-8e30-073fcbadec14","type":"HelpTool"}]},"id":"402783a0-af3f-4fae-8e5d-40446ef14bcd","type":"Toolbar"},{"attributes":{},"id":"3ec95f4a-094f-4aba-973f-e9ea24b90bbe","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6555459e-7116-4047-8b05-533e02ea3ff6","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"37845a31-b907-4376-84d6-334e1fc26234","type":"Circle"},{"attributes":{},"id":"0159d67a-e676-46bd-a1e1-a0eb97243240","type":"BasicTickFormatter"},{"attributes":{},"id":"b8a981c2-7ce8-41f1-b47d-afd3bb84e853","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"minor_grid_line_alpha":{"value":0.1},"minor_grid_line_color":{"value":"navy"},"plot":{"id":"d5bb8f5f-4657-4c07-a451-4f3cf3aa335f","subtype":"Figure","type":"Plot"},"ticker":{"id":"04bc45da-efcf-4392-b2ec-2f11ecedc84a","type":"BasicTicker"}},"id":"71697d4f-ae7e-496d-87dd-c409da2abb50","type":"Grid"},{"attributes":{"callback":null},"id":"7670d29b-bd76-451f-bea6-2fc30708d178","type":"DataRange1d"},{"attributes":{},"id":"d4b5a242-0fba-4778-a0e5-49f9f5defde7","type":"WheelZoomTool"},{"attributes":{},"id":"07ceb3d2-7fda-41a9-8edf-35547c32cd28","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"62938562-17ef-40bc-81d9-afde393c0a8f","type":"Title"},{"attributes":{},"id":"727a4d02-38e1-4d54-8e30-073fcbadec14","type":"HelpTool"},{"attributes":{"formatter":{"id":"b8a981c2-7ce8-41f1-b47d-afd3bb84e853","type":"BasicTickFormatter"},"plot":{"id":"d5bb8f5f-4657-4c07-a451-4f3cf3aa335f","subtype":"Figure","type":"Plot"},"ticker":{"id":"04bc45da-efcf-4392-b2ec-2f11ecedc84a","type":"BasicTicker"}},"id":"c73e3d1d-e89b-4aab-82f9-42484a512eed","type":"LinearAxis"},{"attributes":{"plot":{"id":"d5bb8f5f-4657-4c07-a451-4f3cf3aa335f","subtype":"Figure","type":"Plot"},"ticker":{"id":"07ceb3d2-7fda-41a9-8edf-35547c32cd28","type":"BasicTicker"}},"id":"952b1b61-f80a-46df-a263-282f0ef27aca","type":"Grid"},{"attributes":{},"id":"fd36c3fd-8a03-4068-a69b-5e1b0a2c48c5","type":"PanTool"},{"attributes":{},"id":"c5e654b9-ce0a-415e-bc6e-feed0b232d08","type":"SaveTool"},{"attributes":{"data_source":{"id":"6555459e-7116-4047-8b05-533e02ea3ff6","type":"ColumnDataSource"},"glyph":{"id":"91100498-0630-4635-875e-b1c4659912e7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37845a31-b907-4376-84d6-334e1fc26234","type":"Circle"},"selection_glyph":null,"view":{"id":"89f52baa-77bf-4045-87cf-e7da82bf235d","type":"CDSView"}},"id":"05aa0548-5992-4212-b5d7-9ffca5a1098f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"0159d67a-e676-46bd-a1e1-a0eb97243240","type":"BasicTickFormatter"},"plot":{"id":"d5bb8f5f-4657-4c07-a451-4f3cf3aa335f","subtype":"Figure","type":"Plot"},"ticker":{"id":"07ceb3d2-7fda-41a9-8edf-35547c32cd28","type":"BasicTicker"}},"id":"dd3e7289-f4a6-4510-a82e-231b217d7d42","type":"LinearAxis"},{"attributes":{"source":{"id":"6555459e-7116-4047-8b05-533e02ea3ff6","type":"ColumnDataSource"}},"id":"89f52baa-77bf-4045-87cf-e7da82bf235d","type":"CDSView"}],"root_ids":["d5bb8f5f-4657-4c07-a451-4f3cf3aa335f"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"3a46b25f-3949-42dc-a33c-46c7d9a82bfa","elementid":"79be5f1b-c8ad-43d5-a846-acfadfc53ca1","modelid":"d5bb8f5f-4657-4c07-a451-4f3cf3aa335f"}];
                
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
