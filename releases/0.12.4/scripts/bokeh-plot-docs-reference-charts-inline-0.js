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
      };var element = document.getElementById("d8ca799b-f683-4068-b0ea-9cb98296a840");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd8ca799b-f683-4068-b0ea-9cb98296a840' but no matching script tag was found. ")
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
                var docs_json = {"2210b021-e3d8-4bb6-92dd-0a8b6948da52":{"roots":{"references":[{"attributes":{"items":[{"id":"0cb2cb49-2cdc-433d-a6ee-6871b2ac7c82","type":"LegendItem"},{"id":"c33165cc-cedc-4f6e-bf26-d7db7e05b12f","type":"LegendItem"},{"id":"15784f49-9a75-4004-84a3-f3df92d47afd","type":"LegendItem"}],"location":"top_left","plot":{"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"}},"id":"106b5642-7093-48bd-9217-5f17e421f1b8","type":"Legend"},{"attributes":{},"id":"63f16c78-da24-4228-88d8-5eed1b0854c7","type":"BasicTicker"},{"attributes":{},"id":"35b6740d-abe1-4591-8a5d-41242fc6794b","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Area Chart"},"id":"85a2a14e-feab-4bd9-90cb-025ba516df7c","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e2ed80de-c80a-4793-9bab-d71bfb896678","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"f1386c32-cb13-4d66-8e92-de21ae70fc7c","type":"Patches"},{"attributes":{"plot":{"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"}},"id":"446b2520-9460-4e76-8d89-ef2f54fb9ccb","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"4664a133-f122-4c7b-9202-49a23a80ba72","type":"Patches"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"949e6044-2940-453e-b8eb-0fb4e7373e47","type":"PanTool"},{"id":"446b2520-9460-4e76-8d89-ef2f54fb9ccb","type":"WheelZoomTool"},{"id":"7805bcae-72b2-4fc7-b40b-45c3e7fc29a8","type":"BoxZoomTool"},{"id":"00a1d5e1-41c4-431a-834d-f6154190cdb7","type":"SaveTool"},{"id":"0a565eb0-9272-44eb-9fd8-9450d850575f","type":"ResetTool"},{"id":"2aa50ba8-98d8-49c4-a10e-ed7c3bc8fd76","type":"HelpTool"}]},"id":"d0c71d0e-b8ae-4dc0-9cb3-3e6add01ffec","type":"Toolbar"},{"attributes":{"axis_label":"time","formatter":{"id":"47ca4836-93f8-463b-9ab8-fc9248df1465","type":"BasicTickFormatter"},"plot":{"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"},"ticker":{"id":"63f16c78-da24-4228-88d8-5eed1b0854c7","type":"BasicTicker"}},"id":"4a4e6ae5-7a2e-439a-91d2-0b178f8e4a63","type":"LinearAxis"},{"attributes":{"data_source":{"id":"10cfeba8-5abe-4601-98d8-c9a32456e4ac","type":"ColumnDataSource"},"glyph":{"id":"82ba9266-7e7d-49c5-94e9-3f02318a8e82","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"eac082e3-a18b-403b-bf59-47e3e17a448b","type":"GlyphRenderer"},{"attributes":{"label":{"value":"python"},"renderers":[{"id":"eac082e3-a18b-403b-bf59-47e3e17a448b","type":"GlyphRenderer"}]},"id":"15784f49-9a75-4004-84a3-f3df92d47afd","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"82ba9266-7e7d-49c5-94e9-3f02318a8e82","type":"Patches"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"jython"}],"series":["jython"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAA2QAAAAAAAgEVAAAAAAAAAJEAAAAAAAAA5QAAAAAAAADpAAAAAAABAWUAAAAAAAIBcQAAAAAAAYGlAAAAAAABAaEAAAAAAAOBqQAAAAAAAIGlAAAAAAABgbEAAAAAAAGBhQAAAAAAAAGRAAAAAAAAAAAA=","dtype":"float64","shape":[16]}]}},"id":"5f0c9f53-582c-44a4-b5c3-80aeffa50e67","type":"ColumnDataSource"},{"attributes":{"label":{"value":"pypy"},"renderers":[{"id":"ad7a417d-a9b1-4963-aa51-5e1107a52b7c","type":"GlyphRenderer"}]},"id":"c33165cc-cedc-4f6e-bf26-d7db7e05b12f","type":"LegendItem"},{"attributes":{"plot":{"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"}},"id":"00a1d5e1-41c4-431a-834d-f6154190cdb7","type":"SaveTool"},{"attributes":{"overlay":{"id":"e2ed80de-c80a-4793-9bab-d71bfb896678","type":"BoxAnnotation"},"plot":{"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"}},"id":"7805bcae-72b2-4fc7-b40b-45c3e7fc29a8","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":293.7,"start":-26.700000000000003},"id":"8ec9edc1-6eea-4b39-a79a-d78bda69b704","type":"Range1d"},{"attributes":{},"id":"6740a95b-9c0c-477d-a971-1d9c37089b45","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"python"}],"series":["python"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAQAAAAAAAAAhAAAAAAAAAHEAAAAAAAAAUQAAAAAAAADpAAAAAAACga0AAAAAAAABGQAAAAAAAIG1AAAAAAADAb0AAAAAAAJBwQAAAAAAAoHBAAAAAAACwcEAAAAAAAABeQAAAAAAAwFtAAAAAAAAAAAA=","dtype":"float64","shape":[16]}]}},"id":"10cfeba8-5abe-4601-98d8-c9a32456e4ac","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"b0157c8e-5a08-4ce1-b18f-d4544a17d2d4","type":"Range1d"},{"attributes":{"below":[{"id":"4a4e6ae5-7a2e-439a-91d2-0b178f8e4a63","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"1706e7f2-afd4-4875-b768-f5a0fa10f240","type":"LinearAxis"}],"renderers":[{"id":"e2ed80de-c80a-4793-9bab-d71bfb896678","type":"BoxAnnotation"},{"id":"36c009bd-7d0a-4909-9741-a7584f652073","type":"GlyphRenderer"},{"id":"ad7a417d-a9b1-4963-aa51-5e1107a52b7c","type":"GlyphRenderer"},{"id":"eac082e3-a18b-403b-bf59-47e3e17a448b","type":"GlyphRenderer"},{"id":"106b5642-7093-48bd-9217-5f17e421f1b8","type":"Legend"},{"id":"4a4e6ae5-7a2e-439a-91d2-0b178f8e4a63","type":"LinearAxis"},{"id":"1706e7f2-afd4-4875-b768-f5a0fa10f240","type":"LinearAxis"},{"id":"31f1786d-9392-4c12-a1de-9b506a3cec84","type":"Grid"},{"id":"675e37ed-e159-448b-b417-65c02e0056c4","type":"Grid"}],"title":{"id":"85a2a14e-feab-4bd9-90cb-025ba516df7c","type":"Title"},"tool_events":{"id":"6740a95b-9c0c-477d-a971-1d9c37089b45","type":"ToolEvents"},"toolbar":{"id":"d0c71d0e-b8ae-4dc0-9cb3-3e6add01ffec","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"b0157c8e-5a08-4ce1-b18f-d4544a17d2d4","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"8ec9edc1-6eea-4b39-a79a-d78bda69b704","type":"Range1d"}},"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"}},"id":"2aa50ba8-98d8-49c4-a10e-ed7c3bc8fd76","type":"HelpTool"},{"attributes":{"data_source":{"id":"5f0c9f53-582c-44a4-b5c3-80aeffa50e67","type":"ColumnDataSource"},"glyph":{"id":"4664a133-f122-4c7b-9202-49a23a80ba72","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"36c009bd-7d0a-4909-9741-a7584f652073","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"},"ticker":{"id":"22391d27-0a01-4733-a9bd-e7f06bd0feeb","type":"BasicTicker"}},"id":"675e37ed-e159-448b-b417-65c02e0056c4","type":"Grid"},{"attributes":{"label":{"value":"jython"},"renderers":[{"id":"36c009bd-7d0a-4909-9741-a7584f652073","type":"GlyphRenderer"}]},"id":"0cb2cb49-2cdc-433d-a6ee-6871b2ac7c82","type":"LegendItem"},{"attributes":{},"id":"22391d27-0a01-4733-a9bd-e7f06bd0feeb","type":"BasicTicker"},{"attributes":{"plot":{"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"},"ticker":{"id":"63f16c78-da24-4228-88d8-5eed1b0854c7","type":"BasicTicker"}},"id":"31f1786d-9392-4c12-a1de-9b506a3cec84","type":"Grid"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"pypy"}],"series":["pypy"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAoQAAAAAAAgEBAAAAAAACAR0AAAAAAAAAuQAAAAAAAgF9AAAAAAABAXkAAAAAAAABiQAAAAAAAIG1AAAAAAADAb0AAAAAAACBsQAAAAAAAQGxAAAAAAACwcEAAAAAAAIBbQAAAAAAAQGBAAAAAAAAAAAA=","dtype":"float64","shape":[16]}]}},"id":"b8337dab-77fc-478e-a82c-113509078e07","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b8337dab-77fc-478e-a82c-113509078e07","type":"ColumnDataSource"},"glyph":{"id":"f1386c32-cb13-4d66-8e92-de21ae70fc7c","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ad7a417d-a9b1-4963-aa51-5e1107a52b7c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"}},"id":"0a565eb0-9272-44eb-9fd8-9450d850575f","type":"ResetTool"},{"attributes":{"plot":{"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"}},"id":"949e6044-2940-453e-b8eb-0fb4e7373e47","type":"PanTool"},{"attributes":{},"id":"47ca4836-93f8-463b-9ab8-fc9248df1465","type":"BasicTickFormatter"},{"attributes":{"axis_label":"memory","formatter":{"id":"35b6740d-abe1-4591-8a5d-41242fc6794b","type":"BasicTickFormatter"},"plot":{"id":"5329b16d-6b2a-4766-bb05-fcef6105a7b2","subtype":"Chart","type":"Plot"},"ticker":{"id":"22391d27-0a01-4733-a9bd-e7f06bd0feeb","type":"BasicTicker"}},"id":"1706e7f2-afd4-4875-b768-f5a0fa10f240","type":"LinearAxis"}],"root_ids":["5329b16d-6b2a-4766-bb05-fcef6105a7b2"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"2210b021-e3d8-4bb6-92dd-0a8b6948da52","elementid":"d8ca799b-f683-4068-b0ea-9cb98296a840","modelid":"5329b16d-6b2a-4766-bb05-fcef6105a7b2"}];
                
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
