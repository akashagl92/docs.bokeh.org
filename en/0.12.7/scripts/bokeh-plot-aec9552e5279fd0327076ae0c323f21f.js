(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("ef50b27b-ba46-4209-8049-7f6dc7145802");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ef50b27b-ba46-4209-8049-7f6dc7145802' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"9ee97305-cd29-4607-b015-49f9bfd72202":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0f38e8f4-fa7c-41db-ab8f-da38dcc992e6","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"132c99aa-fff4-45b9-86fa-9cd9143d4947","type":"DataRange1d"},{"attributes":{},"id":"7d0f053c-a28b-4f86-a4f8-e447181612ae","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"58aaf754-9723-4612-aada-d025f62d02ae","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0f639124-e728-4518-8e23-98828f221b04","type":"PanTool"},{"id":"230d769e-61dd-4b37-894a-520f23686802","type":"WheelZoomTool"},{"id":"d4d29636-1d89-4779-b44b-8093c85a3b42","type":"BoxZoomTool"},{"id":"96e83375-00cd-497d-81a9-7cf57096fac6","type":"SaveTool"},{"id":"5b83afd2-fe10-4795-9545-6482c742c685","type":"ResetTool"},{"id":"8c88615c-63aa-4bef-bae3-7c7097568043","type":"HelpTool"}]},"id":"d48f1377-1982-487f-86da-8c922a4b7115","type":"Toolbar"},{"attributes":{},"id":"8c88615c-63aa-4bef-bae3-7c7097568043","type":"HelpTool"},{"attributes":{"plot":{"id":"a7c71330-986b-4619-94c0-e5236e14e537","subtype":"Figure","type":"Plot"},"ticker":{"id":"de418c11-35da-4450-ab5c-6c9ffb2cbac7","type":"BasicTicker"}},"id":"72afb89b-d73f-4a9b-8dae-bba17dc3aa2b","type":"Grid"},{"attributes":{"below":[{"id":"01f4d37a-d30f-4a9b-a049-330c31eb828b","type":"LinearAxis"}],"left":[{"id":"660d8c07-ae3d-4800-8443-ec7edebe159f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"01f4d37a-d30f-4a9b-a049-330c31eb828b","type":"LinearAxis"},{"id":"72afb89b-d73f-4a9b-8dae-bba17dc3aa2b","type":"Grid"},{"id":"660d8c07-ae3d-4800-8443-ec7edebe159f","type":"LinearAxis"},{"id":"0de71117-9cc2-4801-9c61-670f08e6e696","type":"Grid"},{"id":"0f38e8f4-fa7c-41db-ab8f-da38dcc992e6","type":"BoxAnnotation"},{"id":"eff1ff70-0368-442f-8103-bf772adac71e","type":"GlyphRenderer"}],"title":{"id":"f81b71af-c66a-4fc0-8538-ecb61cfcf8bf","type":"Title"},"toolbar":{"id":"d48f1377-1982-487f-86da-8c922a4b7115","type":"Toolbar"},"x_range":{"id":"46f07dc7-bb26-4d65-ad08-785e7d1b83b5","type":"DataRange1d"},"x_scale":{"id":"7d0f053c-a28b-4f86-a4f8-e447181612ae","type":"LinearScale"},"y_range":{"id":"132c99aa-fff4-45b9-86fa-9cd9143d4947","type":"DataRange1d"},"y_scale":{"id":"f626222f-22d5-4df2-9948-84b871fdde68","type":"LinearScale"}},"id":"a7c71330-986b-4619-94c0-e5236e14e537","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"46f07dc7-bb26-4d65-ad08-785e7d1b83b5","type":"DataRange1d"},{"attributes":{},"id":"f626222f-22d5-4df2-9948-84b871fdde68","type":"LinearScale"},{"attributes":{},"id":"83c3299a-d1da-41c9-ba46-6409bc1d8bbb","type":"BasicTicker"},{"attributes":{},"id":"5331a62c-cdbc-41f7-a124-0375cf40c206","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"0f38e8f4-fa7c-41db-ab8f-da38dcc992e6","type":"BoxAnnotation"}},"id":"d4d29636-1d89-4779-b44b-8093c85a3b42","type":"BoxZoomTool"},{"attributes":{},"id":"5b83afd2-fe10-4795-9545-6482c742c685","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"a7c71330-986b-4619-94c0-e5236e14e537","subtype":"Figure","type":"Plot"},"ticker":{"id":"83c3299a-d1da-41c9-ba46-6409bc1d8bbb","type":"BasicTicker"}},"id":"0de71117-9cc2-4801-9c61-670f08e6e696","type":"Grid"},{"attributes":{},"id":"96e83375-00cd-497d-81a9-7cf57096fac6","type":"SaveTool"},{"attributes":{},"id":"230d769e-61dd-4b37-894a-520f23686802","type":"WheelZoomTool"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"5331a62c-cdbc-41f7-a124-0375cf40c206","type":"BasicTickFormatter"},"plot":{"id":"a7c71330-986b-4619-94c0-e5236e14e537","subtype":"Figure","type":"Plot"},"ticker":{"id":"83c3299a-d1da-41c9-ba46-6409bc1d8bbb","type":"BasicTicker"}},"id":"660d8c07-ae3d-4800-8443-ec7edebe159f","type":"LinearAxis"},{"attributes":{},"id":"de418c11-35da-4450-ab5c-6c9ffb2cbac7","type":"BasicTicker"},{"attributes":{},"id":"0f639124-e728-4518-8e23-98828f221b04","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d2177d3e-e26b-46c7-a8b5-6d48ff334e5d","type":"Circle"},{"attributes":{"data_source":{"id":"58aaf754-9723-4612-aada-d025f62d02ae","type":"ColumnDataSource"},"glyph":{"id":"ee55303d-2dd2-4730-a398-cf7419828c92","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d2177d3e-e26b-46c7-a8b5-6d48ff334e5d","type":"Circle"},"selection_glyph":null,"view":{"id":"a230f090-be84-43b8-8cd3-ff93ced2e93b","type":"CDSView"}},"id":"eff1ff70-0368-442f-8103-bf772adac71e","type":"GlyphRenderer"},{"attributes":{},"id":"4f70ed45-62e6-48ed-bd62-19507e8d1402","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee55303d-2dd2-4730-a398-cf7419828c92","type":"Circle"},{"attributes":{"source":{"id":"58aaf754-9723-4612-aada-d025f62d02ae","type":"ColumnDataSource"}},"id":"a230f090-be84-43b8-8cd3-ff93ced2e93b","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"f81b71af-c66a-4fc0-8538-ecb61cfcf8bf","type":"Title"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"4f70ed45-62e6-48ed-bd62-19507e8d1402","type":"BasicTickFormatter"},"plot":{"id":"a7c71330-986b-4619-94c0-e5236e14e537","subtype":"Figure","type":"Plot"},"ticker":{"id":"de418c11-35da-4450-ab5c-6c9ffb2cbac7","type":"BasicTicker"}},"id":"01f4d37a-d30f-4a9b-a049-330c31eb828b","type":"LinearAxis"}],"root_ids":["a7c71330-986b-4619-94c0-e5236e14e537"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"9ee97305-cd29-4607-b015-49f9bfd72202","elementid":"ef50b27b-ba46-4209-8049-7f6dc7145802","modelid":"a7c71330-986b-4619-94c0-e5236e14e537"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
