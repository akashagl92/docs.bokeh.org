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
      };var element = document.getElementById("cabb261f-0732-469e-a1eb-d22e51a5bd30");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cabb261f-0732-469e-a1eb-d22e51a5bd30' but no matching script tag was found. ")
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
                var docs_json = {"b28940fa-58ab-4215-8d11-4fc970160afb":{"roots":{"references":[{"attributes":{"data_source":{"id":"ed26f0ea-be41-460e-b886-d1d658a4e0ef","type":"ColumnDataSource"},"glyph":{"id":"ab199100-dc08-47a7-abc7-a26fb5f38490","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ab199100-dc08-47a7-abc7-a26fb5f38490","type":"Rect"},"selection_glyph":{"id":"ab199100-dc08-47a7-abc7-a26fb5f38490","type":"Rect"}},"id":"296a1794-c580-4906-bd3a-48eeae26df55","type":"GlyphRenderer"},{"attributes":{},"id":"8c61b582-e820-4f89-b836-3f56a1c640ba","type":"LinearScale"},{"attributes":{},"id":"a09911fe-4167-4442-baac-f31f4b124275","type":"BasicTickFormatter"},{"attributes":{},"id":"12ad7c7c-cce5-43d4-83e6-e7509ad88d10","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7a0e9d59-1457-4ee2-bd5f-25c7984d23c5","type":"BoxSelectTool"}]},"id":"0ed345a5-2ca5-441a-ba89-dbd0b1832117","type":"Toolbar"},{"attributes":{"plot":null,"text":"Select Below"},"id":"b2dd2b7a-52e8-420a-8cc5-0bddfbd0e436","type":"Title"},{"attributes":{},"id":"f91b3cdd-a8a1-463b-960b-0d622b2efa68","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7a2de659-55a9-473c-9338-b30a3fcf33f0","type":"BoxAnnotation"},{"attributes":{},"id":"a5c4a008-b2e3-4251-b010-ddddf31e6103","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","width","height","x"],"data":{"height":[],"width":[],"x":[],"y":[]}},"id":"ed26f0ea-be41-460e-b886-d1d658a4e0ef","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"b2274c51-7fb7-4ff9-b598-fee5c0ef5b1c","type":"Range1d"},{"attributes":{"formatter":{"id":"12ad7c7c-cce5-43d4-83e6-e7509ad88d10","type":"BasicTickFormatter"},"plot":{"id":"75ecb6a4-21a5-492c-9b80-265894ca10b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"71d02e4c-a70f-4b73-b869-387f540c1ae4","type":"BasicTicker"}},"id":"c969f440-25fb-47b2-b7b5-d1fb010be7cc","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"#009933"},"height":{"field":"height","units":"data"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab199100-dc08-47a7-abc7-a26fb5f38490","type":"Rect"},{"attributes":{"args":{"source":{"id":"ed26f0ea-be41-460e-b886-d1d658a4e0ef","type":"ColumnDataSource"}},"code":"\n        // get data source from Callback args\n        var data = source.data;\n\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\n        var geometry = cb_data['geometry'];\n\n        /// calculate Rect attributes\n        var width = geometry['x1'] - geometry['x0'];\n        var height = geometry['y1'] - geometry['y0'];\n        var x = geometry['x0'] + width/2;\n        var y = geometry['y0'] + height/2;\n\n        /// update data source with new Rect attributes\n        data['x'].push(x);\n        data['y'].push(y);\n        data['width'].push(width);\n        data['height'].push(height);\n\n        // emit update of data source\n        source.change.emit();\n    "},"id":"9ca3da81-269a-4bb1-a73e-9a8c036b9200","type":"CustomJS"},{"attributes":{"dimension":1,"plot":{"id":"75ecb6a4-21a5-492c-9b80-265894ca10b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"71d02e4c-a70f-4b73-b869-387f540c1ae4","type":"BasicTicker"}},"id":"b91c02df-187a-4291-a770-8063d76ca553","type":"Grid"},{"attributes":{"below":[{"id":"3b0396a1-9369-4a70-91d1-d9465f7b6739","type":"LinearAxis"}],"left":[{"id":"c969f440-25fb-47b2-b7b5-d1fb010be7cc","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3b0396a1-9369-4a70-91d1-d9465f7b6739","type":"LinearAxis"},{"id":"7c29357e-17e6-4cdc-a0ce-1959e21233a5","type":"Grid"},{"id":"c969f440-25fb-47b2-b7b5-d1fb010be7cc","type":"LinearAxis"},{"id":"b91c02df-187a-4291-a770-8063d76ca553","type":"Grid"},{"id":"7a2de659-55a9-473c-9338-b30a3fcf33f0","type":"BoxAnnotation"},{"id":"296a1794-c580-4906-bd3a-48eeae26df55","type":"GlyphRenderer"}],"title":{"id":"b2dd2b7a-52e8-420a-8cc5-0bddfbd0e436","type":"Title"},"tool_events":{"id":"a5c4a008-b2e3-4251-b010-ddddf31e6103","type":"ToolEvents"},"toolbar":{"id":"0ed345a5-2ca5-441a-ba89-dbd0b1832117","type":"Toolbar"},"x_range":{"id":"4699e947-65c2-4a06-820e-9ab404346c92","type":"Range1d"},"x_scale":{"id":"8c61b582-e820-4f89-b836-3f56a1c640ba","type":"LinearScale"},"y_range":{"id":"b2274c51-7fb7-4ff9-b598-fee5c0ef5b1c","type":"Range1d"},"y_scale":{"id":"f91b3cdd-a8a1-463b-960b-0d622b2efa68","type":"LinearScale"}},"id":"75ecb6a4-21a5-492c-9b80-265894ca10b3","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"4699e947-65c2-4a06-820e-9ab404346c92","type":"Range1d"},{"attributes":{"plot":{"id":"75ecb6a4-21a5-492c-9b80-265894ca10b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ea425a6-2881-4813-ba09-7cdc35122711","type":"BasicTicker"}},"id":"7c29357e-17e6-4cdc-a0ce-1959e21233a5","type":"Grid"},{"attributes":{"formatter":{"id":"a09911fe-4167-4442-baac-f31f4b124275","type":"BasicTickFormatter"},"plot":{"id":"75ecb6a4-21a5-492c-9b80-265894ca10b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ea425a6-2881-4813-ba09-7cdc35122711","type":"BasicTicker"}},"id":"3b0396a1-9369-4a70-91d1-d9465f7b6739","type":"LinearAxis"},{"attributes":{"callback":{"id":"9ca3da81-269a-4bb1-a73e-9a8c036b9200","type":"CustomJS"},"overlay":{"id":"7a2de659-55a9-473c-9338-b30a3fcf33f0","type":"BoxAnnotation"},"plot":{"id":"75ecb6a4-21a5-492c-9b80-265894ca10b3","subtype":"Figure","type":"Plot"}},"id":"7a0e9d59-1457-4ee2-bd5f-25c7984d23c5","type":"BoxSelectTool"},{"attributes":{},"id":"71d02e4c-a70f-4b73-b869-387f540c1ae4","type":"BasicTicker"},{"attributes":{},"id":"1ea425a6-2881-4813-ba09-7cdc35122711","type":"BasicTicker"}],"root_ids":["75ecb6a4-21a5-492c-9b80-265894ca10b3"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"b28940fa-58ab-4215-8d11-4fc970160afb","elementid":"cabb261f-0732-469e-a1eb-d22e51a5bd30","modelid":"75ecb6a4-21a5-492c-9b80-265894ca10b3"}];
                
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
