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
      };var element = document.getElementById("7b26cbc6-a3ad-498f-bf83-b140695674ad");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7b26cbc6-a3ad-498f-bf83-b140695674ad' but no matching script tag was found. ")
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
                var docs_json = {"9202a64b-754c-4bf4-acae-2b003b3189aa":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"ce983a32-2f14-4939-8c07-e61b7bf138f4","type":"ColumnDataSource"},{"attributes":{},"id":"b4be8719-a0c5-4aa0-9d8b-13d87ddf6604","type":"ToolEvents"},{"attributes":{"callback":null},"id":"db801399-e860-4377-8172-e7a4ee389b0f","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"45ccda85-e4c5-4b0b-bb6e-7ec293e92f98","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6cad90d7-d287-4205-bdb0-eef5f425f22d","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"4dbd2eb2-8211-4701-9c07-d9be5b83ea48","type":"BasicTickFormatter"},"plot":{"id":"29562018-7e0d-4fa4-91c4-afdb70c58faa","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ebfb623-9c95-4525-86e9-9fbd518bfff1","type":"BasicTicker"}},"id":"f52f009b-07d1-439c-8160-d5211232a5dd","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"29562018-7e0d-4fa4-91c4-afdb70c58faa","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ebfb623-9c95-4525-86e9-9fbd518bfff1","type":"BasicTicker"}},"id":"18a6fa3a-b1ff-48a1-b07e-5cc6fc4a73db","type":"Grid"},{"attributes":{},"id":"4e43ea92-61e8-4532-b681-6684069db7e7","type":"BasicTicker"},{"attributes":{},"id":"db8e8574-2110-4c92-a011-ca52d472c47e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"29562018-7e0d-4fa4-91c4-afdb70c58faa","subtype":"Figure","type":"Plot"}},"id":"f2143a7f-68d7-4abd-bad6-d6ac13008fbb","type":"PanTool"},{"attributes":{"formatter":{"id":"db8e8574-2110-4c92-a011-ca52d472c47e","type":"BasicTickFormatter"},"plot":{"id":"29562018-7e0d-4fa4-91c4-afdb70c58faa","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e43ea92-61e8-4532-b681-6684069db7e7","type":"BasicTicker"}},"id":"2b258a10-9c77-4676-bfcc-d0fc85f47278","type":"LinearAxis"},{"attributes":{"below":[{"id":"2b258a10-9c77-4676-bfcc-d0fc85f47278","type":"LinearAxis"}],"left":[{"id":"f52f009b-07d1-439c-8160-d5211232a5dd","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2b258a10-9c77-4676-bfcc-d0fc85f47278","type":"LinearAxis"},{"id":"bf78c94d-387f-404c-8ae4-b250dcce3b48","type":"Grid"},{"id":"f52f009b-07d1-439c-8160-d5211232a5dd","type":"LinearAxis"},{"id":"18a6fa3a-b1ff-48a1-b07e-5cc6fc4a73db","type":"Grid"},{"id":"6cad90d7-d287-4205-bdb0-eef5f425f22d","type":"BoxAnnotation"},{"id":"505c5d37-6a65-4363-aab9-e9c820547af5","type":"GlyphRenderer"}],"title":{"id":"b7e23ba2-b7df-4a9e-b91b-82458d8307e8","type":"Title"},"tool_events":{"id":"b4be8719-a0c5-4aa0-9d8b-13d87ddf6604","type":"ToolEvents"},"toolbar":{"id":"750ca932-1286-474e-a2c1-1b5daf268a1b","type":"Toolbar"},"x_range":{"id":"d8a2288d-a24f-4eb8-88d2-1f2670b3f93a","type":"DataRange1d"},"y_range":{"id":"db801399-e860-4377-8172-e7a4ee389b0f","type":"DataRange1d"}},"id":"29562018-7e0d-4fa4-91c4-afdb70c58faa","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"29562018-7e0d-4fa4-91c4-afdb70c58faa","subtype":"Figure","type":"Plot"}},"id":"a45f85ac-f9c8-4eb6-9af4-8d62d2924ba3","type":"HelpTool"},{"attributes":{"callback":null},"id":"d8a2288d-a24f-4eb8-88d2-1f2670b3f93a","type":"DataRange1d"},{"attributes":{"plot":{"id":"29562018-7e0d-4fa4-91c4-afdb70c58faa","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e43ea92-61e8-4532-b681-6684069db7e7","type":"BasicTicker"}},"id":"bf78c94d-387f-404c-8ae4-b250dcce3b48","type":"Grid"},{"attributes":{"data_source":{"id":"ce983a32-2f14-4939-8c07-e61b7bf138f4","type":"ColumnDataSource"},"glyph":{"id":"3ed9173b-6444-4d7c-a095-14e7df98143e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"45ccda85-e4c5-4b0b-bb6e-7ec293e92f98","type":"Circle"},"selection_glyph":null},"id":"505c5d37-6a65-4363-aab9-e9c820547af5","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ed9173b-6444-4d7c-a095-14e7df98143e","type":"Circle"},{"attributes":{"overlay":{"id":"6cad90d7-d287-4205-bdb0-eef5f425f22d","type":"BoxAnnotation"},"plot":{"id":"29562018-7e0d-4fa4-91c4-afdb70c58faa","subtype":"Figure","type":"Plot"}},"id":"33f501f3-ac7b-4038-9e86-258307a75509","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"b7e23ba2-b7df-4a9e-b91b-82458d8307e8","type":"Title"},{"attributes":{"plot":{"id":"29562018-7e0d-4fa4-91c4-afdb70c58faa","subtype":"Figure","type":"Plot"}},"id":"d9d44f57-c027-4219-ae9f-0c6939a7adc9","type":"ResetTool"},{"attributes":{"plot":{"id":"29562018-7e0d-4fa4-91c4-afdb70c58faa","subtype":"Figure","type":"Plot"}},"id":"5fdf1329-6cd2-4252-b3a9-83f5789b47a2","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f2143a7f-68d7-4abd-bad6-d6ac13008fbb","type":"PanTool"},{"id":"5fdf1329-6cd2-4252-b3a9-83f5789b47a2","type":"WheelZoomTool"},{"id":"33f501f3-ac7b-4038-9e86-258307a75509","type":"BoxZoomTool"},{"id":"ab1c3564-0dd1-40fc-bb89-d132edb6270e","type":"SaveTool"},{"id":"d9d44f57-c027-4219-ae9f-0c6939a7adc9","type":"ResetTool"},{"id":"a45f85ac-f9c8-4eb6-9af4-8d62d2924ba3","type":"HelpTool"}]},"id":"750ca932-1286-474e-a2c1-1b5daf268a1b","type":"Toolbar"},{"attributes":{"plot":{"id":"29562018-7e0d-4fa4-91c4-afdb70c58faa","subtype":"Figure","type":"Plot"}},"id":"ab1c3564-0dd1-40fc-bb89-d132edb6270e","type":"SaveTool"},{"attributes":{},"id":"4dbd2eb2-8211-4701-9c07-d9be5b83ea48","type":"BasicTickFormatter"},{"attributes":{},"id":"2ebfb623-9c95-4525-86e9-9fbd518bfff1","type":"BasicTicker"}],"root_ids":["29562018-7e0d-4fa4-91c4-afdb70c58faa"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"9202a64b-754c-4bf4-acae-2b003b3189aa","elementid":"7b26cbc6-a3ad-498f-bf83-b140695674ad","modelid":"29562018-7e0d-4fa4-91c4-afdb70c58faa"}];
                
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
