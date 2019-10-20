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
      };var element = document.getElementById("0dc077a0-aebb-4fa6-9ebd-23e1371a0695");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0dc077a0-aebb-4fa6-9ebd-23e1371a0695' but no matching script tag was found. ")
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
                var docs_json = {"0104243f-f5cc-4091-945b-9f5545c2d060":{"roots":{"references":[{"attributes":{"below":[{"id":"1f4220b4-d8c2-4ebb-8dd7-4926660eb66b","type":"LinearAxis"}],"left":[{"id":"8ee7d801-dcf3-4bbb-a526-bf5b28294e35","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1f4220b4-d8c2-4ebb-8dd7-4926660eb66b","type":"LinearAxis"},{"id":"2fe2cde1-4af1-4c4b-9c22-928d21cf68cd","type":"Grid"},{"id":"8ee7d801-dcf3-4bbb-a526-bf5b28294e35","type":"LinearAxis"},{"id":"e2fd11c2-fd42-41be-8474-8b62335224c4","type":"Grid"},{"id":"5fec361e-238d-400d-83bd-5fc696b1611b","type":"BoxAnnotation"},{"id":"a570fe6d-de0b-48ac-ba5d-4cbc5340355a","type":"GlyphRenderer"}],"title":{"id":"7c70b41d-d37f-4bc0-88b9-524c6c72ab48","type":"Title"},"tool_events":{"id":"2041b3a4-51f8-4e18-b18c-37d9b8de99a0","type":"ToolEvents"},"toolbar":{"id":"4081f8c8-952a-44c3-8c80-18254064a2bd","type":"Toolbar"},"x_range":{"id":"fbcbbaff-7675-4c54-a22b-432f407eb8e7","type":"DataRange1d"},"x_scale":{"id":"f8f14db5-8fa2-4be6-a693-46caae894e33","type":"LinearScale"},"y_range":{"id":"e39450c8-21bd-4346-b186-fdd10a691e5a","type":"DataRange1d"},"y_scale":{"id":"1bbf4319-7771-4345-9f69-799b14319995","type":"LinearScale"}},"id":"46ba29ab-e879-43e1-954d-0ce3461f14b2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1bbf4319-7771-4345-9f69-799b14319995","type":"LinearScale"},{"attributes":{},"id":"f5e30cec-ac43-4418-bc80-e05e3d6cb7f5","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f5217d1c-56b9-417e-8269-8b7bba5fd018","type":"BasicTickFormatter"},"plot":{"id":"46ba29ab-e879-43e1-954d-0ce3461f14b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"29112ea3-2851-4e56-8d9e-3f167136ffa0","type":"BasicTicker"}},"id":"8ee7d801-dcf3-4bbb-a526-bf5b28294e35","type":"LinearAxis"},{"attributes":{"formatter":{"id":"6a08baf7-abf4-49cf-85be-b706ce35834e","type":"BasicTickFormatter"},"plot":{"id":"46ba29ab-e879-43e1-954d-0ce3461f14b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5e30cec-ac43-4418-bc80-e05e3d6cb7f5","type":"BasicTicker"}},"id":"1f4220b4-d8c2-4ebb-8dd7-4926660eb66b","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"14c224a1-c4a6-4944-9586-004dd177031f","type":"PanTool"},{"id":"79cb3e80-fd89-49ed-a602-52fd35aa5a73","type":"WheelZoomTool"},{"id":"c0a8153a-837c-405d-a501-4773f8865a28","type":"BoxZoomTool"},{"id":"01661488-924f-48b1-b3bb-7519b492dde7","type":"SaveTool"},{"id":"682fc87d-6035-428b-a688-bbec91f93440","type":"ResetTool"},{"id":"63842697-b1eb-4d9d-bad7-47dab7622a13","type":"HelpTool"}]},"id":"4081f8c8-952a-44c3-8c80-18254064a2bd","type":"Toolbar"},{"attributes":{"callback":null},"id":"e39450c8-21bd-4346-b186-fdd10a691e5a","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5fec361e-238d-400d-83bd-5fc696b1611b","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"5fec361e-238d-400d-83bd-5fc696b1611b","type":"BoxAnnotation"},"plot":{"id":"46ba29ab-e879-43e1-954d-0ce3461f14b2","subtype":"Figure","type":"Plot"}},"id":"c0a8153a-837c-405d-a501-4773f8865a28","type":"BoxZoomTool"},{"attributes":{},"id":"2041b3a4-51f8-4e18-b18c-37d9b8de99a0","type":"ToolEvents"},{"attributes":{"data_source":{"id":"ed729f9f-f79d-4dfe-a7fe-823b7161500b","type":"ColumnDataSource"},"glyph":{"id":"4c9ed6d0-223d-4254-8b18-e190b7967b9c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"808a102b-018a-4d02-8e98-1854435300f1","type":"Circle"},"selection_glyph":null},"id":"a570fe6d-de0b-48ac-ba5d-4cbc5340355a","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"7c70b41d-d37f-4bc0-88b9-524c6c72ab48","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"ed729f9f-f79d-4dfe-a7fe-823b7161500b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"46ba29ab-e879-43e1-954d-0ce3461f14b2","subtype":"Figure","type":"Plot"}},"id":"01661488-924f-48b1-b3bb-7519b492dde7","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c9ed6d0-223d-4254-8b18-e190b7967b9c","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"808a102b-018a-4d02-8e98-1854435300f1","type":"Circle"},{"attributes":{"plot":{"id":"46ba29ab-e879-43e1-954d-0ce3461f14b2","subtype":"Figure","type":"Plot"}},"id":"79cb3e80-fd89-49ed-a602-52fd35aa5a73","type":"WheelZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"46ba29ab-e879-43e1-954d-0ce3461f14b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5e30cec-ac43-4418-bc80-e05e3d6cb7f5","type":"BasicTicker"}},"id":"2fe2cde1-4af1-4c4b-9c22-928d21cf68cd","type":"Grid"},{"attributes":{"callback":null},"id":"fbcbbaff-7675-4c54-a22b-432f407eb8e7","type":"DataRange1d"},{"attributes":{},"id":"6a08baf7-abf4-49cf-85be-b706ce35834e","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"grid_line_dash":[6,4],"plot":{"id":"46ba29ab-e879-43e1-954d-0ce3461f14b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"29112ea3-2851-4e56-8d9e-3f167136ffa0","type":"BasicTicker"}},"id":"e2fd11c2-fd42-41be-8474-8b62335224c4","type":"Grid"},{"attributes":{"plot":{"id":"46ba29ab-e879-43e1-954d-0ce3461f14b2","subtype":"Figure","type":"Plot"}},"id":"63842697-b1eb-4d9d-bad7-47dab7622a13","type":"HelpTool"},{"attributes":{},"id":"29112ea3-2851-4e56-8d9e-3f167136ffa0","type":"BasicTicker"},{"attributes":{"plot":{"id":"46ba29ab-e879-43e1-954d-0ce3461f14b2","subtype":"Figure","type":"Plot"}},"id":"682fc87d-6035-428b-a688-bbec91f93440","type":"ResetTool"},{"attributes":{"plot":{"id":"46ba29ab-e879-43e1-954d-0ce3461f14b2","subtype":"Figure","type":"Plot"}},"id":"14c224a1-c4a6-4944-9586-004dd177031f","type":"PanTool"},{"attributes":{},"id":"f8f14db5-8fa2-4be6-a693-46caae894e33","type":"LinearScale"},{"attributes":{},"id":"f5217d1c-56b9-417e-8269-8b7bba5fd018","type":"BasicTickFormatter"}],"root_ids":["46ba29ab-e879-43e1-954d-0ce3461f14b2"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"0104243f-f5cc-4091-945b-9f5545c2d060","elementid":"0dc077a0-aebb-4fa6-9ebd-23e1371a0695","modelid":"46ba29ab-e879-43e1-954d-0ce3461f14b2"}];
                
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
