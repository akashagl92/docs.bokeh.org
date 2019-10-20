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
      };var element = document.getElementById("30f48a9e-d384-4a04-8462-7073cd748fef");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '30f48a9e-d384-4a04-8462-7073cd748fef' but no matching script tag was found. ")
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
                var docs_json = {"1c745843-6cb2-4a82-a237-1bd2459daa73":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1d37560d-64c6-43b2-8905-eeb0fa008c4a","type":"PanTool"},{"id":"f5167ec0-a5a9-42fe-99e0-ddfab1bf020f","type":"WheelZoomTool"},{"id":"eaecdc12-70a6-47c4-9be3-7bb367b74098","type":"BoxZoomTool"},{"id":"8261ac4e-7455-4736-a17a-f2d8ae2a7710","type":"SaveTool"},{"id":"1f535aae-40b7-467b-a0bf-f1a931bce41b","type":"ResetTool"},{"id":"a0e2a6ff-e783-49ac-96ff-fe0e053cbaa6","type":"HelpTool"}]},"id":"976e2d0f-03a7-469b-9aeb-7741da066f8f","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"3b873c56-5882-44d9-b5d2-c8412d42eda5","type":"HBar"},{"attributes":{},"id":"e9b10ee9-dd1f-449c-a7f7-8061b25f03d6","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["right","y"],"data":{"right":[1,2,3],"y":[1,2,3]}},"id":"9dd82ecd-7ca3-4ec4-878a-5fd964ee91f1","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1","subtype":"Figure","type":"Plot"}},"id":"8261ac4e-7455-4736-a17a-f2d8ae2a7710","type":"SaveTool"},{"attributes":{},"id":"c99b6b7f-c774-4815-ac1e-d2820ff8ece5","type":"ToolEvents"},{"attributes":{"data_source":{"id":"9dd82ecd-7ca3-4ec4-878a-5fd964ee91f1","type":"ColumnDataSource"},"glyph":{"id":"54787de9-6e2c-479a-83cf-7d85145d5888","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3b873c56-5882-44d9-b5d2-c8412d42eda5","type":"HBar"},"selection_glyph":null},"id":"6bf2a407-b08a-4e61-ab2c-42bccbf0ed5a","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a3899453-72ee-47c2-a952-25050d994d71","type":"LinearAxis"}],"left":[{"id":"a3968156-4644-4887-8fbf-a8ac456c8024","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a3899453-72ee-47c2-a952-25050d994d71","type":"LinearAxis"},{"id":"f41f8ecc-0d2e-4669-8f52-68b64e6b7965","type":"Grid"},{"id":"a3968156-4644-4887-8fbf-a8ac456c8024","type":"LinearAxis"},{"id":"c8f0d036-0441-4322-9530-59dfce81ecab","type":"Grid"},{"id":"87cbb288-d503-4aa8-b4cb-2887e8e4d939","type":"BoxAnnotation"},{"id":"6bf2a407-b08a-4e61-ab2c-42bccbf0ed5a","type":"GlyphRenderer"}],"title":{"id":"1045af8b-fd2a-4846-91e6-8f263ea87c7e","type":"Title"},"tool_events":{"id":"c99b6b7f-c774-4815-ac1e-d2820ff8ece5","type":"ToolEvents"},"toolbar":{"id":"976e2d0f-03a7-469b-9aeb-7741da066f8f","type":"Toolbar"},"x_range":{"id":"723f0de0-a469-4a5d-83f6-5621d1a3c656","type":"DataRange1d"},"y_range":{"id":"759f8a6b-ce68-4269-bad8-a36d16af8c3b","type":"DataRange1d"}},"id":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5cb45c7d-a6d0-4b81-ad9d-a7e8ab6366a5","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"87cbb288-d503-4aa8-b4cb-2887e8e4d939","type":"BoxAnnotation"},"plot":{"id":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1","subtype":"Figure","type":"Plot"}},"id":"eaecdc12-70a6-47c4-9be3-7bb367b74098","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"5cb45c7d-a6d0-4b81-ad9d-a7e8ab6366a5","type":"BasicTickFormatter"},"plot":{"id":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"b131c2c4-e8dd-4d98-a5aa-c4b67a8ce365","type":"BasicTicker"}},"id":"a3968156-4644-4887-8fbf-a8ac456c8024","type":"LinearAxis"},{"attributes":{},"id":"b131c2c4-e8dd-4d98-a5aa-c4b67a8ce365","type":"BasicTicker"},{"attributes":{"plot":{"id":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1","subtype":"Figure","type":"Plot"}},"id":"1d37560d-64c6-43b2-8905-eeb0fa008c4a","type":"PanTool"},{"attributes":{"callback":null},"id":"759f8a6b-ce68-4269-bad8-a36d16af8c3b","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"b131c2c4-e8dd-4d98-a5aa-c4b67a8ce365","type":"BasicTicker"}},"id":"c8f0d036-0441-4322-9530-59dfce81ecab","type":"Grid"},{"attributes":{"plot":{"id":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1","subtype":"Figure","type":"Plot"}},"id":"f5167ec0-a5a9-42fe-99e0-ddfab1bf020f","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"723f0de0-a469-4a5d-83f6-5621d1a3c656","type":"DataRange1d"},{"attributes":{"formatter":{"id":"3a7e8f8f-2544-4a87-815b-dd2946cdb329","type":"BasicTickFormatter"},"plot":{"id":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9b10ee9-dd1f-449c-a7f7-8061b25f03d6","type":"BasicTicker"}},"id":"a3899453-72ee-47c2-a952-25050d994d71","type":"LinearAxis"},{"attributes":{"plot":{"id":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1","subtype":"Figure","type":"Plot"}},"id":"1f535aae-40b7-467b-a0bf-f1a931bce41b","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"1045af8b-fd2a-4846-91e6-8f263ea87c7e","type":"Title"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"54787de9-6e2c-479a-83cf-7d85145d5888","type":"HBar"},{"attributes":{"plot":{"id":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1","subtype":"Figure","type":"Plot"}},"id":"a0e2a6ff-e783-49ac-96ff-fe0e053cbaa6","type":"HelpTool"},{"attributes":{},"id":"3a7e8f8f-2544-4a87-815b-dd2946cdb329","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"87cbb288-d503-4aa8-b4cb-2887e8e4d939","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9b10ee9-dd1f-449c-a7f7-8061b25f03d6","type":"BasicTicker"}},"id":"f41f8ecc-0d2e-4669-8f52-68b64e6b7965","type":"Grid"}],"root_ids":["3e79a8aa-4ad3-46b5-842b-391ee3da81e1"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"1c745843-6cb2-4a82-a237-1bd2459daa73","elementid":"30f48a9e-d384-4a04-8462-7073cd748fef","modelid":"3e79a8aa-4ad3-46b5-842b-391ee3da81e1"}];
                
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
