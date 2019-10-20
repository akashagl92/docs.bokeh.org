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
      };var element = document.getElementById("7784d9a2-a180-4689-b8e2-95d6c759652a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7784d9a2-a180-4689-b8e2-95d6c759652a' but no matching script tag was found. ")
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
                var docs_json = {"fdcd37fc-b5eb-41db-be5e-a3dbf2803b12":{"roots":{"references":[{"attributes":{},"id":"882f229c-bb1f-49de-b8be-fe0973cd8028","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":""},"id":"7ec677ea-796e-4c4f-90fe-a9f0baeeeeeb","type":"Title"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"5fbd3750-603b-45c1-987a-d4adec92eb3e","type":"FactorRange"},{"attributes":{"plot":{"id":"7446b1ca-a64f-4645-985f-14603be23948","subtype":"Figure","type":"Plot"},"ticker":{"id":"fbebc8e6-3b03-4631-b2a2-f879cae8f7dc","type":"BasicTicker"}},"id":"9b1c4cef-08da-4bc4-b7fb-9d39f4a173db","type":"Grid"},{"attributes":{},"id":"e36c7406-aa25-4e90-b3a8-4a5ad8eb180f","type":"CategoricalTickFormatter"},{"attributes":{},"id":"fbebc8e6-3b03-4631-b2a2-f879cae8f7dc","type":"BasicTicker"},{"attributes":{"plot":{"id":"7446b1ca-a64f-4645-985f-14603be23948","subtype":"Figure","type":"Plot"}},"id":"0af3e716-3605-4b2c-a453-82b2c4ea0f61","type":"ResetTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"bbb59311-d6a9-4d96-aa67-d0266670fc3a","type":"Circle"},{"attributes":{"data_source":{"id":"431bc926-75a6-4c5b-bc4a-441c5ced9cd3","type":"ColumnDataSource"},"glyph":{"id":"bbb59311-d6a9-4d96-aa67-d0266670fc3a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a544b281-3604-4a66-a94a-d0ce6cd52ce6","type":"Circle"},"selection_glyph":null},"id":"4e1cab6f-82d5-49e9-8eb1-200ce0af4a99","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ddad7f81-6b66-48a3-9069-66d2d4f8259a","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"431bc926-75a6-4c5b-bc4a-441c5ced9cd3","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7446b1ca-a64f-4645-985f-14603be23948","subtype":"Figure","type":"Plot"}},"id":"07241aa5-8711-453f-9998-4da8c456f3d1","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a544b281-3604-4a66-a94a-d0ce6cd52ce6","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"7446b1ca-a64f-4645-985f-14603be23948","subtype":"Figure","type":"Plot"},"ticker":{"id":"882f229c-bb1f-49de-b8be-fe0973cd8028","type":"CategoricalTicker"}},"id":"0629c28e-e969-4719-a590-1e66e6b5b144","type":"Grid"},{"attributes":{},"id":"7ecf0687-eb60-4935-b7ad-97ee46a7205b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e36c7406-aa25-4e90-b3a8-4a5ad8eb180f","type":"CategoricalTickFormatter"},"plot":{"id":"7446b1ca-a64f-4645-985f-14603be23948","subtype":"Figure","type":"Plot"},"ticker":{"id":"882f229c-bb1f-49de-b8be-fe0973cd8028","type":"CategoricalTicker"}},"id":"e539badb-af57-4316-b841-952c8cdd4500","type":"CategoricalAxis"},{"attributes":{},"id":"1a21bd13-4bb2-45f2-8632-647754be9966","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e866e78e-bb4e-4ec4-b9df-f1c834165992","type":"PanTool"},{"id":"afa49f50-1534-4380-8191-e4b0c426d3b8","type":"WheelZoomTool"},{"id":"1d17c5e0-8b95-4f33-a65b-2197a8cd2495","type":"BoxZoomTool"},{"id":"6d1df1b0-704d-4cec-978d-b8dc7ec9f883","type":"SaveTool"},{"id":"0af3e716-3605-4b2c-a453-82b2c4ea0f61","type":"ResetTool"},{"id":"07241aa5-8711-453f-9998-4da8c456f3d1","type":"HelpTool"}]},"id":"09fc70fd-0e79-435e-bab7-70fda76d34ad","type":"Toolbar"},{"attributes":{"plot":{"id":"7446b1ca-a64f-4645-985f-14603be23948","subtype":"Figure","type":"Plot"}},"id":"afa49f50-1534-4380-8191-e4b0c426d3b8","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"ddad7f81-6b66-48a3-9069-66d2d4f8259a","type":"BoxAnnotation"},"plot":{"id":"7446b1ca-a64f-4645-985f-14603be23948","subtype":"Figure","type":"Plot"}},"id":"1d17c5e0-8b95-4f33-a65b-2197a8cd2495","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7446b1ca-a64f-4645-985f-14603be23948","subtype":"Figure","type":"Plot"}},"id":"6d1df1b0-704d-4cec-978d-b8dc7ec9f883","type":"SaveTool"},{"attributes":{"formatter":{"id":"7ecf0687-eb60-4935-b7ad-97ee46a7205b","type":"BasicTickFormatter"},"plot":{"id":"7446b1ca-a64f-4645-985f-14603be23948","subtype":"Figure","type":"Plot"},"ticker":{"id":"fbebc8e6-3b03-4631-b2a2-f879cae8f7dc","type":"BasicTicker"}},"id":"2a94b6ae-2323-4750-a7ec-67923a000531","type":"LinearAxis"},{"attributes":{"callback":null},"id":"3d4c8f47-206b-4137-8f07-3164c0d77aa8","type":"DataRange1d"},{"attributes":{"below":[{"id":"2a94b6ae-2323-4750-a7ec-67923a000531","type":"LinearAxis"}],"left":[{"id":"e539badb-af57-4316-b841-952c8cdd4500","type":"CategoricalAxis"}],"renderers":[{"id":"2a94b6ae-2323-4750-a7ec-67923a000531","type":"LinearAxis"},{"id":"9b1c4cef-08da-4bc4-b7fb-9d39f4a173db","type":"Grid"},{"id":"e539badb-af57-4316-b841-952c8cdd4500","type":"CategoricalAxis"},{"id":"0629c28e-e969-4719-a590-1e66e6b5b144","type":"Grid"},{"id":"ddad7f81-6b66-48a3-9069-66d2d4f8259a","type":"BoxAnnotation"},{"id":"4e1cab6f-82d5-49e9-8eb1-200ce0af4a99","type":"GlyphRenderer"}],"title":{"id":"7ec677ea-796e-4c4f-90fe-a9f0baeeeeeb","type":"Title"},"tool_events":{"id":"1a21bd13-4bb2-45f2-8632-647754be9966","type":"ToolEvents"},"toolbar":{"id":"09fc70fd-0e79-435e-bab7-70fda76d34ad","type":"Toolbar"},"x_range":{"id":"3d4c8f47-206b-4137-8f07-3164c0d77aa8","type":"DataRange1d"},"y_range":{"id":"5fbd3750-603b-45c1-987a-d4adec92eb3e","type":"FactorRange"}},"id":"7446b1ca-a64f-4645-985f-14603be23948","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"7446b1ca-a64f-4645-985f-14603be23948","subtype":"Figure","type":"Plot"}},"id":"e866e78e-bb4e-4ec4-b9df-f1c834165992","type":"PanTool"}],"root_ids":["7446b1ca-a64f-4645-985f-14603be23948"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"fdcd37fc-b5eb-41db-be5e-a3dbf2803b12","elementid":"7784d9a2-a180-4689-b8e2-95d6c759652a","modelid":"7446b1ca-a64f-4645-985f-14603be23948"}];
                
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
