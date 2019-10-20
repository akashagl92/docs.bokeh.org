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
      };var element = document.getElementById("f7b24327-c38a-494c-aeb7-80caefda37b3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f7b24327-c38a-494c-aeb7-80caefda37b3' but no matching script tag was found. ")
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
                  var docs_json = {"7a3c80b9-612c-47fd-804c-1628e1cf0ec1":{"roots":{"references":[{"attributes":{"plot":{"id":"0b98a491-1b4f-4f3c-ba57-47727b94678d","subtype":"Figure","type":"Plot"},"ticker":{"id":"08c0f648-f676-4391-b4f2-b5fd9461c7aa","type":"BasicTicker"}},"id":"2eaa6ba5-22db-48c7-b208-c9d10fcc13be","type":"Grid"},{"attributes":{},"id":"fbb17939-ef4b-4808-881e-3dfd586a8333","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8b734186-d888-4e9b-b24f-4c020ce4b2e7","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"0b98a491-1b4f-4f3c-ba57-47727b94678d","subtype":"Figure","type":"Plot"}},"id":"ba15295e-f8ec-402b-98d3-d23ce1d493c5","type":"HelpTool"},{"attributes":{},"id":"cf1e94a8-0734-4667-93d3-26fc0ab54be5","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"0b98a491-1b4f-4f3c-ba57-47727b94678d","subtype":"Figure","type":"Plot"},"ticker":{"id":"fbb17939-ef4b-4808-881e-3dfd586a8333","type":"BasicTicker"}},"id":"243c4ea2-6fd8-4ddb-9465-2552b38fd88c","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"bd8810da-31c3-4d0a-b9da-052056b67fe8","type":"Title"},{"attributes":{"plot":{"id":"0b98a491-1b4f-4f3c-ba57-47727b94678d","subtype":"Figure","type":"Plot"}},"id":"ae77b08b-e148-4923-aa02-44df2098dc94","type":"SaveTool"},{"attributes":{"overlay":{"id":"8b734186-d888-4e9b-b24f-4c020ce4b2e7","type":"BoxAnnotation"},"plot":{"id":"0b98a491-1b4f-4f3c-ba57-47727b94678d","subtype":"Figure","type":"Plot"}},"id":"0c084dd8-3f38-4d99-ba75-e555a8a592b7","type":"BoxZoomTool"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"3dbb9ce3-8c0e-48c0-881d-5b091299b2c3","type":"Patches"},{"attributes":{"formatter":{"id":"60fb1c59-9529-4421-9232-ab4523cf530a","type":"BasicTickFormatter"},"plot":{"id":"0b98a491-1b4f-4f3c-ba57-47727b94678d","subtype":"Figure","type":"Plot"},"ticker":{"id":"08c0f648-f676-4391-b4f2-b5fd9461c7aa","type":"BasicTicker"}},"id":"3b661235-98a3-440b-8bbd-faf441ee6931","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"645d1884-b67c-4186-8061-26c994d97639","type":"Patches"},{"attributes":{"callback":null},"id":"aa124f3e-6dfc-4b2a-9e0b-154dc23a2016","type":"DataRange1d"},{"attributes":{"below":[{"id":"3b661235-98a3-440b-8bbd-faf441ee6931","type":"LinearAxis"}],"left":[{"id":"135b0946-ddfa-47cb-b99f-b5426422325c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3b661235-98a3-440b-8bbd-faf441ee6931","type":"LinearAxis"},{"id":"2eaa6ba5-22db-48c7-b208-c9d10fcc13be","type":"Grid"},{"id":"135b0946-ddfa-47cb-b99f-b5426422325c","type":"LinearAxis"},{"id":"243c4ea2-6fd8-4ddb-9465-2552b38fd88c","type":"Grid"},{"id":"8b734186-d888-4e9b-b24f-4c020ce4b2e7","type":"BoxAnnotation"},{"id":"5eebd258-b34d-46fd-87eb-2c0d4cfc7760","type":"GlyphRenderer"}],"title":{"id":"bd8810da-31c3-4d0a-b9da-052056b67fe8","type":"Title"},"tool_events":{"id":"6f132112-678f-4fce-9f90-4b53765c5a38","type":"ToolEvents"},"toolbar":{"id":"6fc3e008-caaf-4900-a511-d5a7e87ff667","type":"Toolbar"},"x_range":{"id":"aa124f3e-6dfc-4b2a-9e0b-154dc23a2016","type":"DataRange1d"},"y_range":{"id":"4795943a-3c1c-463b-acd5-9a1b5edc0049","type":"DataRange1d"}},"id":"0b98a491-1b4f-4f3c-ba57-47727b94678d","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"cf1e94a8-0734-4667-93d3-26fc0ab54be5","type":"BasicTickFormatter"},"plot":{"id":"0b98a491-1b4f-4f3c-ba57-47727b94678d","subtype":"Figure","type":"Plot"},"ticker":{"id":"fbb17939-ef4b-4808-881e-3dfd586a8333","type":"BasicTicker"}},"id":"135b0946-ddfa-47cb-b99f-b5426422325c","type":"LinearAxis"},{"attributes":{"plot":{"id":"0b98a491-1b4f-4f3c-ba57-47727b94678d","subtype":"Figure","type":"Plot"}},"id":"616ec448-159d-4ada-ac78-78f730960630","type":"ResetTool"},{"attributes":{"callback":null},"id":"4795943a-3c1c-463b-acd5-9a1b5edc0049","type":"DataRange1d"},{"attributes":{"data_source":{"id":"ce449981-123c-4318-a855-32a67f5fecc6","type":"ColumnDataSource"},"glyph":{"id":"3dbb9ce3-8c0e-48c0-881d-5b091299b2c3","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"645d1884-b67c-4186-8061-26c994d97639","type":"Patches"},"selection_glyph":null},"id":"5eebd258-b34d-46fd-87eb-2c0d4cfc7760","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0b98a491-1b4f-4f3c-ba57-47727b94678d","subtype":"Figure","type":"Plot"}},"id":"707bd3a2-b0a4-4274-bd2a-d20ebfff63d4","type":"WheelZoomTool"},{"attributes":{},"id":"08c0f648-f676-4391-b4f2-b5fd9461c7aa","type":"BasicTicker"},{"attributes":{},"id":"6f132112-678f-4fce-9f90-4b53765c5a38","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"29012fbf-ff55-4ecd-8cba-adf76d43e81c","type":"PanTool"},{"id":"707bd3a2-b0a4-4274-bd2a-d20ebfff63d4","type":"WheelZoomTool"},{"id":"0c084dd8-3f38-4d99-ba75-e555a8a592b7","type":"BoxZoomTool"},{"id":"ae77b08b-e148-4923-aa02-44df2098dc94","type":"SaveTool"},{"id":"616ec448-159d-4ada-ac78-78f730960630","type":"ResetTool"},{"id":"ba15295e-f8ec-402b-98d3-d23ce1d493c5","type":"HelpTool"}]},"id":"6fc3e008-caaf-4900-a511-d5a7e87ff667","type":"Toolbar"},{"attributes":{},"id":"60fb1c59-9529-4421-9232-ab4523cf530a","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color","fill_color"],"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]}},"id":"ce449981-123c-4318-a855-32a67f5fecc6","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0b98a491-1b4f-4f3c-ba57-47727b94678d","subtype":"Figure","type":"Plot"}},"id":"29012fbf-ff55-4ecd-8cba-adf76d43e81c","type":"PanTool"}],"root_ids":["0b98a491-1b4f-4f3c-ba57-47727b94678d"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"7a3c80b9-612c-47fd-804c-1628e1cf0ec1","elementid":"f7b24327-c38a-494c-aeb7-80caefda37b3","modelid":"0b98a491-1b4f-4f3c-ba57-47727b94678d"}];
                  
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