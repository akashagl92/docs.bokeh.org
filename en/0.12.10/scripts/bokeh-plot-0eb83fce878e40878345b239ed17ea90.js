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
      };var element = document.getElementById("3152ac3d-40ea-43a3-ae3e-dc9f44b285cf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3152ac3d-40ea-43a3-ae3e-dc9f44b285cf' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"324fa261-3aff-42b1-903c-aeca10024648":{"roots":{"references":[{"attributes":{"formatter":{"id":"8b65643d-7c58-479b-9b15-ce9e7639b6ac","type":"BasicTickFormatter"},"plot":{"id":"ffe50108-a384-4de8-aae6-c861cffb4cd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f9a9f0b-1dc6-4d8f-a659-ae873a770a46","type":"BasicTicker"}},"id":"296c1271-1bdc-49aa-b5ca-70e4462ec13b","type":"LinearAxis"},{"attributes":{"formatter":{"id":"e7a983e1-71c8-4dba-be97-d2587bdeb964","type":"BasicTickFormatter"},"plot":{"id":"ffe50108-a384-4de8-aae6-c861cffb4cd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"d27e4693-6d22-4533-95bc-cde4200444cb","type":"BasicTicker"}},"id":"8a9b8d4a-34bc-4495-9589-4d9875c1cb64","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1fb40ff9-a7e2-4549-a48d-637b99ef66c5","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"#009933"},"height":{"field":"height","units":"data"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5ac80d12-3201-476b-b503-925cb432b523","type":"Rect"},{"attributes":{"callback":null,"column_names":["x","y","width","height"],"data":{"height":[],"width":[],"x":[],"y":[]}},"id":"8fbf4436-d499-4fdc-83ee-ed300eeabffa","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"296c1271-1bdc-49aa-b5ca-70e4462ec13b","type":"LinearAxis"}],"left":[{"id":"8a9b8d4a-34bc-4495-9589-4d9875c1cb64","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"296c1271-1bdc-49aa-b5ca-70e4462ec13b","type":"LinearAxis"},{"id":"2e06f600-a447-48f1-a0ce-270f721d6d72","type":"Grid"},{"id":"8a9b8d4a-34bc-4495-9589-4d9875c1cb64","type":"LinearAxis"},{"id":"efc2f00b-fb64-4f88-a4ab-d7f092e1a377","type":"Grid"},{"id":"1fb40ff9-a7e2-4549-a48d-637b99ef66c5","type":"BoxAnnotation"},{"id":"b345bda9-9714-4d52-8a7e-931b9282f508","type":"GlyphRenderer"}],"title":{"id":"537c2b03-3ad7-41a0-b411-3120201370f5","type":"Title"},"toolbar":{"id":"e7d87496-c55e-4c5c-b61b-a66d3482221b","type":"Toolbar"},"x_range":{"id":"31341b13-84e5-4c64-bda6-1cafb89f5426","type":"Range1d"},"x_scale":{"id":"2b4f890b-9830-4195-9cfe-caa826b8b211","type":"LinearScale"},"y_range":{"id":"c6a16dd5-c4d9-41dc-ae92-09c0ff8c9495","type":"Range1d"},"y_scale":{"id":"d17e48ba-e5b9-4ca6-aa62-f0d0ff3f854d","type":"LinearScale"}},"id":"ffe50108-a384-4de8-aae6-c861cffb4cd1","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"ffe50108-a384-4de8-aae6-c861cffb4cd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f9a9f0b-1dc6-4d8f-a659-ae873a770a46","type":"BasicTicker"}},"id":"2e06f600-a447-48f1-a0ce-270f721d6d72","type":"Grid"},{"attributes":{},"id":"e7a983e1-71c8-4dba-be97-d2587bdeb964","type":"BasicTickFormatter"},{"attributes":{},"id":"2b4f890b-9830-4195-9cfe-caa826b8b211","type":"LinearScale"},{"attributes":{"data_source":{"id":"8fbf4436-d499-4fdc-83ee-ed300eeabffa","type":"ColumnDataSource"},"glyph":{"id":"5ac80d12-3201-476b-b503-925cb432b523","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5ac80d12-3201-476b-b503-925cb432b523","type":"Rect"},"selection_glyph":{"id":"5ac80d12-3201-476b-b503-925cb432b523","type":"Rect"},"view":{"id":"204265ce-2e0b-4cc8-b9df-e263ebb61e31","type":"CDSView"}},"id":"b345bda9-9714-4d52-8a7e-931b9282f508","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"c6a16dd5-c4d9-41dc-ae92-09c0ff8c9495","type":"Range1d"},{"attributes":{},"id":"8b65643d-7c58-479b-9b15-ce9e7639b6ac","type":"BasicTickFormatter"},{"attributes":{"args":{"source":{"id":"8fbf4436-d499-4fdc-83ee-ed300eeabffa","type":"ColumnDataSource"}},"code":"\n        // get data source from Callback args\n        var data = source.data;\n\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\n        var geometry = cb_data['geometry'];\n\n        /// calculate Rect attributes\n        var width = geometry['x1'] - geometry['x0'];\n        var height = geometry['y1'] - geometry['y0'];\n        var x = geometry['x0'] + width/2;\n        var y = geometry['y0'] + height/2;\n\n        /// update data source with new Rect attributes\n        data['x'].push(x);\n        data['y'].push(y);\n        data['width'].push(width);\n        data['height'].push(height);\n\n        // emit update of data source\n        source.change.emit();\n    "},"id":"5dbe74fe-36c6-41ea-aa30-846de6664bbb","type":"CustomJS"},{"attributes":{"plot":null,"text":"Select Below"},"id":"537c2b03-3ad7-41a0-b411-3120201370f5","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"ffe50108-a384-4de8-aae6-c861cffb4cd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"d27e4693-6d22-4533-95bc-cde4200444cb","type":"BasicTicker"}},"id":"efc2f00b-fb64-4f88-a4ab-d7f092e1a377","type":"Grid"},{"attributes":{},"id":"d27e4693-6d22-4533-95bc-cde4200444cb","type":"BasicTicker"},{"attributes":{},"id":"2f9a9f0b-1dc6-4d8f-a659-ae873a770a46","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9d2118db-e370-47da-954f-2f57e3da309f","type":"BoxSelectTool"}]},"id":"e7d87496-c55e-4c5c-b61b-a66d3482221b","type":"Toolbar"},{"attributes":{"callback":{"id":"5dbe74fe-36c6-41ea-aa30-846de6664bbb","type":"CustomJS"},"overlay":{"id":"1fb40ff9-a7e2-4549-a48d-637b99ef66c5","type":"BoxAnnotation"}},"id":"9d2118db-e370-47da-954f-2f57e3da309f","type":"BoxSelectTool"},{"attributes":{"source":{"id":"8fbf4436-d499-4fdc-83ee-ed300eeabffa","type":"ColumnDataSource"}},"id":"204265ce-2e0b-4cc8-b9df-e263ebb61e31","type":"CDSView"},{"attributes":{},"id":"d17e48ba-e5b9-4ca6-aa62-f0d0ff3f854d","type":"LinearScale"},{"attributes":{"callback":null},"id":"31341b13-84e5-4c64-bda6-1cafb89f5426","type":"Range1d"}],"root_ids":["ffe50108-a384-4de8-aae6-c861cffb4cd1"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"324fa261-3aff-42b1-903c-aeca10024648","elementid":"3152ac3d-40ea-43a3-ae3e-dc9f44b285cf","modelid":"ffe50108-a384-4de8-aae6-c861cffb4cd1"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
