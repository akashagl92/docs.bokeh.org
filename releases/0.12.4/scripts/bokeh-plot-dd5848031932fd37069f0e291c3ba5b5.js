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
      };var element = document.getElementById("5c9551fd-ba77-4b02-8d15-63d8d1c2abed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5c9551fd-ba77-4b02-8d15-63d8d1c2abed' but no matching script tag was found. ")
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
                var docs_json = {"006d20e8-19f7-40d2-be2f-285cf6e08dab":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe0a93e2-e5a9-4f50-94fc-7bf12394ca24","type":"Circle"},{"attributes":{"plot":{"id":"765434ab-3e8f-4705-8179-e5c58919191d","subtype":"Figure","type":"Plot"}},"id":"85264feb-50d3-4b78-9ddf-ea4ecae06d0e","type":"SaveTool"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"e0a98a99-0748-44bc-a623-b0193a315348","type":"Title"},{"attributes":{},"id":"52a085e7-c279-4399-9acb-395e9c28b8ac","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fa7b6429-15ab-40f0-9c4c-c1e508fbe6de","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"3a185ff6-ff40-43a1-9399-3989b311a84d","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"2523a4af-632c-4c66-8063-d27c06cc0a6c","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f6d7ffb-8608-4bd2-a2d3-cd524a18af50","type":"Circle"},{"attributes":{"overlay":{"id":"fa7b6429-15ab-40f0-9c4c-c1e508fbe6de","type":"BoxAnnotation"},"plot":{"id":"765434ab-3e8f-4705-8179-e5c58919191d","subtype":"Figure","type":"Plot"}},"id":"ee550183-88e4-4cb0-bc43-2b6063af0731","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"7de339d7-0133-42cd-a3bd-9afd22fd5280","type":"LinearAxis"}],"left":[{"id":"62fa6a8e-37d7-44f5-a9cb-a1cb4d717895","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7de339d7-0133-42cd-a3bd-9afd22fd5280","type":"LinearAxis"},{"id":"47b610c6-54ff-4e03-ad89-d3279918e3e6","type":"Grid"},{"id":"62fa6a8e-37d7-44f5-a9cb-a1cb4d717895","type":"LinearAxis"},{"id":"46c07c90-7762-4a6f-a88a-0b912a492b34","type":"Grid"},{"id":"fa7b6429-15ab-40f0-9c4c-c1e508fbe6de","type":"BoxAnnotation"},{"id":"99ea57d4-505b-41de-9dfc-8e573f508afe","type":"GlyphRenderer"}],"title":{"id":"e0a98a99-0748-44bc-a623-b0193a315348","type":"Title"},"tool_events":{"id":"52a085e7-c279-4399-9acb-395e9c28b8ac","type":"ToolEvents"},"toolbar":{"id":"1e06962b-77b9-494f-99ea-38019d449362","type":"Toolbar"},"x_range":{"id":"15291d36-1449-404e-9b6d-8ac86fb0ce84","type":"DataRange1d"},"y_range":{"id":"2523a4af-632c-4c66-8063-d27c06cc0a6c","type":"DataRange1d"}},"id":"765434ab-3e8f-4705-8179-e5c58919191d","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"765434ab-3e8f-4705-8179-e5c58919191d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6973872-610f-47d4-8a2b-706b63016b10","type":"BasicTicker"}},"id":"46c07c90-7762-4a6f-a88a-0b912a492b34","type":"Grid"},{"attributes":{"data_source":{"id":"3a185ff6-ff40-43a1-9399-3989b311a84d","type":"ColumnDataSource"},"glyph":{"id":"7f6d7ffb-8608-4bd2-a2d3-cd524a18af50","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"fe0a93e2-e5a9-4f50-94fc-7bf12394ca24","type":"Circle"},"selection_glyph":null},"id":"99ea57d4-505b-41de-9dfc-8e573f508afe","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"765434ab-3e8f-4705-8179-e5c58919191d","subtype":"Figure","type":"Plot"}},"id":"25797ed9-596a-46c0-8279-39838ffb5bfc","type":"ResetTool"},{"attributes":{"plot":{"id":"765434ab-3e8f-4705-8179-e5c58919191d","subtype":"Figure","type":"Plot"}},"id":"ce754529-ea66-47da-8386-cb0061e4468f","type":"HelpTool"},{"attributes":{"plot":{"id":"765434ab-3e8f-4705-8179-e5c58919191d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3437f1f-ecde-4ffa-bc00-a1001b03d13f","type":"BasicTicker"}},"id":"47b610c6-54ff-4e03-ad89-d3279918e3e6","type":"Grid"},{"attributes":{"formatter":{"id":"b0d2cf97-848e-4af7-bbaa-ec8b095fb6ba","type":"BasicTickFormatter"},"plot":{"id":"765434ab-3e8f-4705-8179-e5c58919191d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6973872-610f-47d4-8a2b-706b63016b10","type":"BasicTicker"}},"id":"62fa6a8e-37d7-44f5-a9cb-a1cb4d717895","type":"LinearAxis"},{"attributes":{},"id":"a3437f1f-ecde-4ffa-bc00-a1001b03d13f","type":"BasicTicker"},{"attributes":{"plot":{"id":"765434ab-3e8f-4705-8179-e5c58919191d","subtype":"Figure","type":"Plot"}},"id":"d97817f3-a7d3-47c4-be14-040793f1c41b","type":"PanTool"},{"attributes":{},"id":"5053e512-cd7e-4176-8836-7ac39f4a88df","type":"BasicTickFormatter"},{"attributes":{},"id":"a6973872-610f-47d4-8a2b-706b63016b10","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d97817f3-a7d3-47c4-be14-040793f1c41b","type":"PanTool"},{"id":"ed7f24cb-5df3-4a1f-be5e-bda0f8177a39","type":"WheelZoomTool"},{"id":"ee550183-88e4-4cb0-bc43-2b6063af0731","type":"BoxZoomTool"},{"id":"85264feb-50d3-4b78-9ddf-ea4ecae06d0e","type":"SaveTool"},{"id":"25797ed9-596a-46c0-8279-39838ffb5bfc","type":"ResetTool"},{"id":"ce754529-ea66-47da-8386-cb0061e4468f","type":"HelpTool"}]},"id":"1e06962b-77b9-494f-99ea-38019d449362","type":"Toolbar"},{"attributes":{},"id":"b0d2cf97-848e-4af7-bbaa-ec8b095fb6ba","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"15291d36-1449-404e-9b6d-8ac86fb0ce84","type":"DataRange1d"},{"attributes":{"formatter":{"id":"5053e512-cd7e-4176-8836-7ac39f4a88df","type":"BasicTickFormatter"},"plot":{"id":"765434ab-3e8f-4705-8179-e5c58919191d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3437f1f-ecde-4ffa-bc00-a1001b03d13f","type":"BasicTicker"}},"id":"7de339d7-0133-42cd-a3bd-9afd22fd5280","type":"LinearAxis"},{"attributes":{"plot":{"id":"765434ab-3e8f-4705-8179-e5c58919191d","subtype":"Figure","type":"Plot"}},"id":"ed7f24cb-5df3-4a1f-be5e-bda0f8177a39","type":"WheelZoomTool"}],"root_ids":["765434ab-3e8f-4705-8179-e5c58919191d"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"006d20e8-19f7-40d2-be2f-285cf6e08dab","elementid":"5c9551fd-ba77-4b02-8d15-63d8d1c2abed","modelid":"765434ab-3e8f-4705-8179-e5c58919191d"}];
                
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
