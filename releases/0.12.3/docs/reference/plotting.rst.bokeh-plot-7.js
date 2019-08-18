document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("b71342ef-22d5-4ef0-98a5-ba47f3e397e1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b71342ef-22d5-4ef0-98a5-ba47f3e397e1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"67b40f04-3ea4-45b6-b3ce-b47d2b194f4d":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b0ad437e-9195-4610-ac5d-97e582afdf7a","type":"PanTool"},{"id":"819723f6-5e55-4bf6-8896-20dca58a1164","type":"WheelZoomTool"},{"id":"8d64fc49-b1fd-4600-a419-32b9a5d0a975","type":"BoxZoomTool"},{"id":"2ced3b25-27e8-460e-9596-3d0e9aa5189b","type":"SaveTool"},{"id":"275358ad-2ab1-4ae4-8707-e68ed86ba7c2","type":"ResetTool"},{"id":"59e411c7-c6fb-4e35-9e14-08c4ed717f7e","type":"HelpTool"}]},"id":"32bebc50-d0cf-48c1-bbb6-0b97820c2de9","type":"Toolbar"},{"attributes":{"callback":null},"id":"11bbdf0a-7d65-418e-8db9-c651f7a75e89","type":"DataRange1d"},{"attributes":{"formatter":{"id":"4e62209c-b3ae-40ed-8166-45957fdc949d","type":"BasicTickFormatter"},"plot":{"id":"b1aa85a4-986f-4e27-809e-a35b57eef64d","subtype":"Figure","type":"Plot"},"ticker":{"id":"dfbf5fb8-4ebc-4678-9c06-fa07fb271afb","type":"BasicTicker"}},"id":"b000cf02-1a43-4287-a305-ae299663a87b","type":"LinearAxis"},{"attributes":{"plot":{"id":"b1aa85a4-986f-4e27-809e-a35b57eef64d","subtype":"Figure","type":"Plot"}},"id":"275358ad-2ab1-4ae4-8707-e68ed86ba7c2","type":"ResetTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"0cfb1988-7fcf-47ff-91f7-d211eae65ed1","type":"DiamondCross"},{"attributes":{"plot":{"id":"b1aa85a4-986f-4e27-809e-a35b57eef64d","subtype":"Figure","type":"Plot"}},"id":"2ced3b25-27e8-460e-9596-3d0e9aa5189b","type":"SaveTool"},{"attributes":{"plot":{"id":"b1aa85a4-986f-4e27-809e-a35b57eef64d","subtype":"Figure","type":"Plot"}},"id":"59e411c7-c6fb-4e35-9e14-08c4ed717f7e","type":"HelpTool"},{"attributes":{"overlay":{"id":"2a3d8155-68dd-4197-a64c-81e75a0b427f","type":"BoxAnnotation"},"plot":{"id":"b1aa85a4-986f-4e27-809e-a35b57eef64d","subtype":"Figure","type":"Plot"}},"id":"8d64fc49-b1fd-4600-a419-32b9a5d0a975","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"281b0c19-43e1-40b5-890a-34b34a418b79","type":"DataRange1d"},{"attributes":{},"id":"dfbf5fb8-4ebc-4678-9c06-fa07fb271afb","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"fab7c08d-0fe1-4015-82d6-c8eaa73f69e8","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"b1aa85a4-986f-4e27-809e-a35b57eef64d","subtype":"Figure","type":"Plot"},"ticker":{"id":"dfbf5fb8-4ebc-4678-9c06-fa07fb271afb","type":"BasicTicker"}},"id":"baab035a-9dce-4f71-b248-44f9ea72172d","type":"Grid"},{"attributes":{},"id":"4e62209c-b3ae-40ed-8166-45957fdc949d","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"dc1eab0d-31f0-4099-b7dc-1ae717d68b57","type":"BasicTickFormatter"},"plot":{"id":"b1aa85a4-986f-4e27-809e-a35b57eef64d","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b841ec3-87d1-4c83-8c6b-f7febf7b4e55","type":"BasicTicker"}},"id":"7a5a22bf-d16c-4681-90bd-87bb2a1628c9","type":"LinearAxis"},{"attributes":{},"id":"a79c0492-4855-4f3d-91b6-8d8eb3e76613","type":"ToolEvents"},{"attributes":{"data_source":{"id":"add85e0f-33e5-4e39-87c5-cb449cb5386f","type":"ColumnDataSource"},"glyph":{"id":"0cfb1988-7fcf-47ff-91f7-d211eae65ed1","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":{"id":"7a0990a1-d617-4048-9fc2-fbf3456b5a5a","type":"DiamondCross"},"selection_glyph":null},"id":"44c4c72c-c32a-4815-812f-d2a964d142ac","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a0990a1-d617-4048-9fc2-fbf3456b5a5a","type":"DiamondCross"},{"attributes":{"plot":{"id":"b1aa85a4-986f-4e27-809e-a35b57eef64d","subtype":"Figure","type":"Plot"}},"id":"819723f6-5e55-4bf6-8896-20dca58a1164","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2a3d8155-68dd-4197-a64c-81e75a0b427f","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"b1aa85a4-986f-4e27-809e-a35b57eef64d","subtype":"Figure","type":"Plot"}},"id":"b0ad437e-9195-4610-ac5d-97e582afdf7a","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"add85e0f-33e5-4e39-87c5-cb449cb5386f","type":"ColumnDataSource"},{"attributes":{},"id":"8b841ec3-87d1-4c83-8c6b-f7febf7b4e55","type":"BasicTicker"},{"attributes":{"plot":{"id":"b1aa85a4-986f-4e27-809e-a35b57eef64d","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b841ec3-87d1-4c83-8c6b-f7febf7b4e55","type":"BasicTicker"}},"id":"6b01f2f7-4bcd-42d1-84f6-81771c245558","type":"Grid"},{"attributes":{"below":[{"id":"7a5a22bf-d16c-4681-90bd-87bb2a1628c9","type":"LinearAxis"}],"left":[{"id":"b000cf02-1a43-4287-a305-ae299663a87b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7a5a22bf-d16c-4681-90bd-87bb2a1628c9","type":"LinearAxis"},{"id":"6b01f2f7-4bcd-42d1-84f6-81771c245558","type":"Grid"},{"id":"b000cf02-1a43-4287-a305-ae299663a87b","type":"LinearAxis"},{"id":"baab035a-9dce-4f71-b248-44f9ea72172d","type":"Grid"},{"id":"2a3d8155-68dd-4197-a64c-81e75a0b427f","type":"BoxAnnotation"},{"id":"44c4c72c-c32a-4815-812f-d2a964d142ac","type":"GlyphRenderer"}],"title":{"id":"fab7c08d-0fe1-4015-82d6-c8eaa73f69e8","type":"Title"},"tool_events":{"id":"a79c0492-4855-4f3d-91b6-8d8eb3e76613","type":"ToolEvents"},"toolbar":{"id":"32bebc50-d0cf-48c1-bbb6-0b97820c2de9","type":"Toolbar"},"x_range":{"id":"281b0c19-43e1-40b5-890a-34b34a418b79","type":"DataRange1d"},"y_range":{"id":"11bbdf0a-7d65-418e-8db9-c651f7a75e89","type":"DataRange1d"}},"id":"b1aa85a4-986f-4e27-809e-a35b57eef64d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"dc1eab0d-31f0-4099-b7dc-1ae717d68b57","type":"BasicTickFormatter"}],"root_ids":["b1aa85a4-986f-4e27-809e-a35b57eef64d"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"67b40f04-3ea4-45b6-b3ce-b47d2b194f4d","elementid":"b71342ef-22d5-4ef0-98a5-ba47f3e397e1","modelid":"b1aa85a4-986f-4e27-809e-a35b57eef64d"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});