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
      };var element = document.getElementById("3ef3cbec-ab1b-4995-8ae9-ee9614382bd4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3ef3cbec-ab1b-4995-8ae9-ee9614382bd4' but no matching script tag was found. ")
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
                var docs_json = {"38b7344b-496f-461b-9f70-e9beccb0bf80":{"roots":{"references":[{"attributes":{},"id":"a8e3fed2-9287-46a2-8cd6-c66d4e27b3fc","type":"ToolEvents"},{"attributes":{"overlay":{"id":"11c51eb8-aed3-41be-a838-b5666ac17d76","type":"BoxAnnotation"},"plot":{"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"}},"id":"61a42537-8c16-44da-8de9-19687c1b28cd","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"d43a52d6-8a0d-46b8-874d-a8a5879251be","type":"ColumnDataSource"},"glyph":{"id":"4014d06e-2793-4941-baad-019ded35d32f","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b408d48a-dacc-41b6-a636-e625b44e6b34","type":"GlyphRenderer"},{"attributes":{"label":{"value":"python"},"renderers":[{"id":"27479ed7-9513-4c9f-be9b-2edee526207f","type":"GlyphRenderer"}]},"id":"d79fb935-5981-4299-a44d-628fffa38179","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"}],"series":["pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[12,33,47,15,126,121,144,233,254,225,226,267,110,130]}},"id":"86ad4f66-98ec-468a-baea-17b1f7ef63a0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"}},"id":"1a4f898a-fbc9-4ba7-a18c-e8f21cdcc9ba","type":"HelpTool"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"4014d06e-2793-4941-baad-019ded35d32f","type":"Line"},{"attributes":{"axis_label":"index","formatter":{"id":"ef021220-a938-4b09-ab57-ed1fdb014b8b","type":"BasicTickFormatter"},"plot":{"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"},"ticker":{"id":"f3bff6d8-facd-4f7a-851f-7231a6829c6e","type":"BasicTicker"}},"id":"a791b645-4495-4aa0-aedd-7f3d5d2f1447","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"}],"series":["jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[22,43,10,25,26,101,114,203,194,215,201,227,139,160]}},"id":"d43a52d6-8a0d-46b8-874d-a8a5879251be","type":"ColumnDataSource"},{"attributes":{"label":{"value":"jython"},"renderers":[{"id":"b408d48a-dacc-41b6-a636-e625b44e6b34","type":"GlyphRenderer"}]},"id":"4abbccdf-e09a-4c1f-b32b-c7011eb8293f","type":"LegendItem"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"0040482b-e561-4fb9-ba43-7b526de325a4","type":"Range1d"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"129fd4c1-ac5c-4e90-81bd-e9f1816f23b3","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"},"ticker":{"id":"1c87a8c6-5eba-49ef-a371-c41c210a5d09","type":"BasicTicker"}},"id":"e5b7d1fc-d771-4448-b5f7-7500f33de81a","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11c51eb8-aed3-41be-a838-b5666ac17d76","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"}},"id":"e694e750-7f28-4270-a2f0-aeba6e371b27","type":"PanTool"},{"attributes":{"data_source":{"id":"86ad4f66-98ec-468a-baea-17b1f7ef63a0","type":"ColumnDataSource"},"glyph":{"id":"129fd4c1-ac5c-4e90-81bd-e9f1816f23b3","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"10bdec1b-54e0-4323-b4c6-8a39f4ffec55","type":"GlyphRenderer"},{"attributes":{},"id":"e409ea5d-5ea7-407a-aeb3-ad59146f3a3b","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"4abbccdf-e09a-4c1f-b32b-c7011eb8293f","type":"LegendItem"},{"id":"cf7872ae-b032-4be6-9341-80193ec488ed","type":"LegendItem"},{"id":"d79fb935-5981-4299-a44d-628fffa38179","type":"LegendItem"}],"location":"top_left","plot":{"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"}},"id":"36d0683d-ad19-4769-9277-5c65a180f3d7","type":"Legend"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e694e750-7f28-4270-a2f0-aeba6e371b27","type":"PanTool"},{"id":"3a6b2456-fb2d-4f04-96f4-d5426603b54f","type":"WheelZoomTool"},{"id":"61a42537-8c16-44da-8de9-19687c1b28cd","type":"BoxZoomTool"},{"id":"3d622d41-a9f1-4cf2-8ce0-b1eb4d136b32","type":"SaveTool"},{"id":"f213d1fe-ee1d-48e1-a3ac-5ce3c72ccc24","type":"ResetTool"},{"id":"1a4f898a-fbc9-4ba7-a18c-e8f21cdcc9ba","type":"HelpTool"}]},"id":"0f017325-48b5-4e14-bb21-7b00bf10dcb2","type":"Toolbar"},{"attributes":{"plot":{"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"},"ticker":{"id":"f3bff6d8-facd-4f7a-851f-7231a6829c6e","type":"BasicTicker"}},"id":"53ef85d4-d8be-4459-8107-c004535ea10f","type":"Grid"},{"attributes":{"axis_label":"Duration","formatter":{"id":"e409ea5d-5ea7-407a-aeb3-ad59146f3a3b","type":"BasicTickFormatter"},"plot":{"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"},"ticker":{"id":"1c87a8c6-5eba-49ef-a371-c41c210a5d09","type":"BasicTicker"}},"id":"02e0292e-38ae-4946-b361-f8aab1000ad5","type":"LinearAxis"},{"attributes":{},"id":"ef021220-a938-4b09-ab57-ed1fdb014b8b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":293.5,"start":-24.5},"id":"40391e8e-90b2-4cb9-b476-6f804929b636","type":"Range1d"},{"attributes":{"data_source":{"id":"9fb71cc6-25b8-4b8f-88b2-1cde836251b5","type":"ColumnDataSource"},"glyph":{"id":"78929d3b-2221-4096-9faf-353089c538b8","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"27479ed7-9513-4c9f-be9b-2edee526207f","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a791b645-4495-4aa0-aedd-7f3d5d2f1447","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"02e0292e-38ae-4946-b361-f8aab1000ad5","type":"LinearAxis"}],"renderers":[{"id":"11c51eb8-aed3-41be-a838-b5666ac17d76","type":"BoxAnnotation"},{"id":"27479ed7-9513-4c9f-be9b-2edee526207f","type":"GlyphRenderer"},{"id":"10bdec1b-54e0-4323-b4c6-8a39f4ffec55","type":"GlyphRenderer"},{"id":"b408d48a-dacc-41b6-a636-e625b44e6b34","type":"GlyphRenderer"},{"id":"36d0683d-ad19-4769-9277-5c65a180f3d7","type":"Legend"},{"id":"a791b645-4495-4aa0-aedd-7f3d5d2f1447","type":"LinearAxis"},{"id":"02e0292e-38ae-4946-b361-f8aab1000ad5","type":"LinearAxis"},{"id":"53ef85d4-d8be-4459-8107-c004535ea10f","type":"Grid"},{"id":"e5b7d1fc-d771-4448-b5f7-7500f33de81a","type":"Grid"}],"title":{"id":"0a06f9f0-3c67-468c-bec2-785cb797673c","type":"Title"},"tool_events":{"id":"a8e3fed2-9287-46a2-8cd6-c66d4e27b3fc","type":"ToolEvents"},"toolbar":{"id":"0f017325-48b5-4e14-bb21-7b00bf10dcb2","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"0040482b-e561-4fb9-ba43-7b526de325a4","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"40391e8e-90b2-4cb9-b476-6f804929b636","type":"Range1d"}},"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"},{"attributes":{"label":{"value":"pypy"},"renderers":[{"id":"10bdec1b-54e0-4323-b4c6-8a39f4ffec55","type":"GlyphRenderer"}]},"id":"cf7872ae-b032-4be6-9341-80193ec488ed","type":"LegendItem"},{"attributes":{"plot":{"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"}},"id":"3d622d41-a9f1-4cf2-8ce0-b1eb4d136b32","type":"SaveTool"},{"attributes":{"plot":{"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"}},"id":"3a6b2456-fb2d-4f04-96f4-d5426603b54f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023","subtype":"Chart","type":"Plot"}},"id":"f213d1fe-ee1d-48e1-a3ac-5ce3c72ccc24","type":"ResetTool"},{"attributes":{},"id":"f3bff6d8-facd-4f7a-851f-7231a6829c6e","type":"BasicTicker"},{"attributes":{},"id":"1c87a8c6-5eba-49ef-a371-c41c210a5d09","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"}],"series":["python","python","python","python","python","python","python","python","python","python","python","python","python","python"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[2,3,7,5,26,221,44,233,254,265,266,267,120,111]}},"id":"9fb71cc6-25b8-4b8f-88b2-1cde836251b5","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#407ee7"},"line_dash":[2,4],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"78929d3b-2221-4096-9faf-353089c538b8","type":"Line"},{"attributes":{"plot":null,"text":"Interpreter Sample Data"},"id":"0a06f9f0-3c67-468c-bec2-785cb797673c","type":"Title"}],"root_ids":["0b7703e2-210b-4f8b-8bb6-c83fd7d56023"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"38b7344b-496f-461b-9f70-e9beccb0bf80","elementid":"3ef3cbec-ab1b-4995-8ae9-ee9614382bd4","modelid":"0b7703e2-210b-4f8b-8bb6-c83fd7d56023"}];
                
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
