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
      };var element = document.getElementById("8f6c6c6d-a4da-4414-80fe-2e0dbedb111c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8f6c6c6d-a4da-4414-80fe-2e0dbedb111c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"cdde7d57-9396-4172-b009-0a74bff2db59":{"roots":{"references":[{"attributes":{"formatter":{"id":"8fec1562-ce5f-41e5-870d-9a5bdc8ab9d7","type":"BasicTickFormatter"},"plot":{"id":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac269f2b-cbd9-42f0-92e7-04b411f16800","type":"BasicTicker"}},"id":"a28a0a1d-f541-4076-b392-9fef37561dd5","type":"LinearAxis"},{"attributes":{},"id":"d2f49fcb-0fd8-496a-9e0c-27fa7cee6254","type":"ToolEvents"},{"attributes":{"callback":null},"id":"ac2a634a-9cd5-400d-8bad-3c6dd2210e54","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7","subtype":"Figure","type":"Plot"},"ticker":{"id":"f974c044-a532-41d2-8d98-f543efd1bd9c","type":"BasicTicker"}},"id":"8f2c9fa7-94dc-4ab9-ae73-8f935f493de0","type":"Grid"},{"attributes":{"formatter":{"id":"824f3e8d-9f63-40b9-b971-645da536bb99","type":"BasicTickFormatter"},"plot":{"id":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7","subtype":"Figure","type":"Plot"},"ticker":{"id":"f974c044-a532-41d2-8d98-f543efd1bd9c","type":"BasicTicker"}},"id":"db76255c-ea34-41d7-8b5d-651034706792","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"51c54ac2-3bc7-4e17-8222-2abecfaaf139","type":"AnnularWedge"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14dc0799-715a-41aa-9847-ce8185cf8487","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7","subtype":"Figure","type":"Plot"}},"id":"8a86d9f6-3c15-46e5-a023-121f2d1909ae","type":"PanTool"},{"attributes":{},"id":"824f3e8d-9f63-40b9-b971-645da536bb99","type":"BasicTickFormatter"},{"attributes":{},"id":"ac269f2b-cbd9-42f0-92e7-04b411f16800","type":"BasicTicker"},{"attributes":{"callback":null},"id":"12b92ea5-a34a-4e55-b1a4-6770811218b4","type":"DataRange1d"},{"attributes":{"data_source":{"id":"01022551-ff15-44e8-a7b0-7f9804248bbb","type":"ColumnDataSource"},"glyph":{"id":"fb874e28-3f75-4ea5-b597-3a70522bbf04","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":{"id":"51c54ac2-3bc7-4e17-8222-2abecfaaf139","type":"AnnularWedge"},"selection_glyph":null},"id":"0df6509f-c346-4fd4-a2e3-75bb224d4438","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac269f2b-cbd9-42f0-92e7-04b411f16800","type":"BasicTicker"}},"id":"9ac70fbc-12e0-4599-8f52-d7885f6ed5a2","type":"Grid"},{"attributes":{},"id":"f974c044-a532-41d2-8d98-f543efd1bd9c","type":"BasicTicker"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb874e28-3f75-4ea5-b597-3a70522bbf04","type":"AnnularWedge"},{"attributes":{"overlay":{"id":"14dc0799-715a-41aa-9847-ce8185cf8487","type":"BoxAnnotation"},"plot":{"id":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7","subtype":"Figure","type":"Plot"}},"id":"c336f9ce-8039-4c3f-b536-9ad830bf8e6b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7","subtype":"Figure","type":"Plot"}},"id":"29b9c6ab-9ea1-4f1a-9e11-83085abad2a2","type":"SaveTool"},{"attributes":{"plot":{"id":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7","subtype":"Figure","type":"Plot"}},"id":"e3eacf90-e5a2-484c-a3bb-607fa7c45ff6","type":"HelpTool"},{"attributes":{},"id":"8fec1562-ce5f-41e5-870d-9a5bdc8ab9d7","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"a28a0a1d-f541-4076-b392-9fef37561dd5","type":"LinearAxis"}],"left":[{"id":"db76255c-ea34-41d7-8b5d-651034706792","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a28a0a1d-f541-4076-b392-9fef37561dd5","type":"LinearAxis"},{"id":"9ac70fbc-12e0-4599-8f52-d7885f6ed5a2","type":"Grid"},{"id":"db76255c-ea34-41d7-8b5d-651034706792","type":"LinearAxis"},{"id":"8f2c9fa7-94dc-4ab9-ae73-8f935f493de0","type":"Grid"},{"id":"14dc0799-715a-41aa-9847-ce8185cf8487","type":"BoxAnnotation"},{"id":"0df6509f-c346-4fd4-a2e3-75bb224d4438","type":"GlyphRenderer"}],"title":{"id":"1437e034-c64c-47a4-a2b5-609453914793","type":"Title"},"tool_events":{"id":"d2f49fcb-0fd8-496a-9e0c-27fa7cee6254","type":"ToolEvents"},"toolbar":{"id":"580c313e-5f99-4b9a-b0bf-b5332d61c4b6","type":"Toolbar"},"x_range":{"id":"ac2a634a-9cd5-400d-8bad-3c6dd2210e54","type":"DataRange1d"},"y_range":{"id":"12b92ea5-a34a-4e55-b1a4-6770811218b4","type":"DataRange1d"}},"id":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"1437e034-c64c-47a4-a2b5-609453914793","type":"Title"},{"attributes":{"plot":{"id":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7","subtype":"Figure","type":"Plot"}},"id":"8b7ca832-4a04-4d46-adaa-6e6f58b80137","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7","subtype":"Figure","type":"Plot"}},"id":"30bd1087-4f84-4e92-bbe9-8a236adabf04","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8a86d9f6-3c15-46e5-a023-121f2d1909ae","type":"PanTool"},{"id":"8b7ca832-4a04-4d46-adaa-6e6f58b80137","type":"WheelZoomTool"},{"id":"c336f9ce-8039-4c3f-b536-9ad830bf8e6b","type":"BoxZoomTool"},{"id":"29b9c6ab-9ea1-4f1a-9e11-83085abad2a2","type":"SaveTool"},{"id":"30bd1087-4f84-4e92-bbe9-8a236adabf04","type":"ResetTool"},{"id":"e3eacf90-e5a2-484c-a3bb-607fa7c45ff6","type":"HelpTool"}]},"id":"580c313e-5f99-4b9a-b0bf-b5332d61c4b6","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"01022551-ff15-44e8-a7b0-7f9804248bbb","type":"ColumnDataSource"}],"root_ids":["64d8f2e0-3496-463e-8cfb-ec117c4ae2a7"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"cdde7d57-9396-4172-b009-0a74bff2db59","elementid":"8f6c6c6d-a4da-4414-80fe-2e0dbedb111c","modelid":"64d8f2e0-3496-463e-8cfb-ec117c4ae2a7"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
