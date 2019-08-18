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
      };var element = document.getElementById("16891501-6bd0-4f48-bb9d-a03f4b932d92");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '16891501-6bd0-4f48-bb9d-a03f4b932d92' but no matching script tag was found. ")
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
                var docs_json = {"daacf1ef-9aaf-4f09-9c7e-274d7b25b553":{"roots":{"references":[{"attributes":{"plot":null,"text":"Select Below"},"id":"bc2f18b6-df67-4bb1-8739-5f7c28f20677","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"051f3386-1c5a-469a-a018-40ae6cfec353","type":"BoxSelectTool"}]},"id":"1188b368-d969-4015-846d-7e851a9398b0","type":"Toolbar"},{"attributes":{},"id":"4d10bb01-feb9-4523-9cb5-f9683484c42c","type":"LinearScale"},{"attributes":{"data_source":{"id":"cad1d19e-8335-4f38-8da8-dcff18041bb2","type":"ColumnDataSource"},"glyph":{"id":"e32fa1c5-070c-475d-a38b-4c1beed3ad0c","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e32fa1c5-070c-475d-a38b-4c1beed3ad0c","type":"Rect"},"selection_glyph":{"id":"e32fa1c5-070c-475d-a38b-4c1beed3ad0c","type":"Rect"},"view":{"id":"92088900-7913-4cfd-9a91-ff8592bca3fc","type":"CDSView"}},"id":"ca19296f-cb2b-48d6-96cc-f9ce305e7593","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"92d5dbec-cde0-4c99-988b-bba7c97d071f","type":"Range1d"},{"attributes":{},"id":"38eae722-3209-4a35-9cf4-5e453cd287fe","type":"LinearScale"},{"attributes":{"plot":{"id":"5592d66b-aea8-42fd-8a5c-bb0dbefa5f7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"83454dae-1150-4391-a612-58f6ab9dae91","type":"BasicTicker"}},"id":"7ad111bd-b158-400e-bf67-43ef5db9e9a2","type":"Grid"},{"attributes":{"callback":{"id":"6f4f3eee-b208-414e-99dd-127887c6b801","type":"CustomJS"},"overlay":{"id":"f62b0bdd-cccc-46e2-8625-514434fd1008","type":"BoxAnnotation"}},"id":"051f3386-1c5a-469a-a018-40ae6cfec353","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"1964e9a6-9488-4579-bf40-eff0e6708e10","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"#009933"},"height":{"field":"height","units":"data"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e32fa1c5-070c-475d-a38b-4c1beed3ad0c","type":"Rect"},{"attributes":{"formatter":{"id":"d7402e4d-52ba-46cd-af7c-fdeb686f02cb","type":"BasicTickFormatter"},"plot":{"id":"5592d66b-aea8-42fd-8a5c-bb0dbefa5f7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"703396e9-2fc1-42dc-94b9-7e80f872c6b5","type":"BasicTicker"}},"id":"18749c57-e5ab-4c90-99e2-57e9829b29f7","type":"LinearAxis"},{"attributes":{"args":{"source":{"id":"cad1d19e-8335-4f38-8da8-dcff18041bb2","type":"ColumnDataSource"}},"code":"\n        // get data source from Callback args\n        var data = source.data;\n\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\n        var geometry = cb_data['geometry'];\n\n        /// calculate Rect attributes\n        var width = geometry['x1'] - geometry['x0'];\n        var height = geometry['y1'] - geometry['y0'];\n        var x = geometry['x0'] + width/2;\n        var y = geometry['y0'] + height/2;\n\n        /// update data source with new Rect attributes\n        data['x'].push(x);\n        data['y'].push(y);\n        data['width'].push(width);\n        data['height'].push(height);\n\n        // emit update of data source\n        source.change.emit();\n    "},"id":"6f4f3eee-b208-414e-99dd-127887c6b801","type":"CustomJS"},{"attributes":{"below":[{"id":"316828a0-4511-4527-aa44-da33ffc9cfb9","type":"LinearAxis"}],"left":[{"id":"18749c57-e5ab-4c90-99e2-57e9829b29f7","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"316828a0-4511-4527-aa44-da33ffc9cfb9","type":"LinearAxis"},{"id":"7ad111bd-b158-400e-bf67-43ef5db9e9a2","type":"Grid"},{"id":"18749c57-e5ab-4c90-99e2-57e9829b29f7","type":"LinearAxis"},{"id":"df1e3063-16e7-4faa-90a2-1241af1de124","type":"Grid"},{"id":"f62b0bdd-cccc-46e2-8625-514434fd1008","type":"BoxAnnotation"},{"id":"ca19296f-cb2b-48d6-96cc-f9ce305e7593","type":"GlyphRenderer"}],"title":{"id":"bc2f18b6-df67-4bb1-8739-5f7c28f20677","type":"Title"},"toolbar":{"id":"1188b368-d969-4015-846d-7e851a9398b0","type":"Toolbar"},"x_range":{"id":"1964e9a6-9488-4579-bf40-eff0e6708e10","type":"Range1d"},"x_scale":{"id":"4d10bb01-feb9-4523-9cb5-f9683484c42c","type":"LinearScale"},"y_range":{"id":"92d5dbec-cde0-4c99-988b-bba7c97d071f","type":"Range1d"},"y_scale":{"id":"38eae722-3209-4a35-9cf4-5e453cd287fe","type":"LinearScale"}},"id":"5592d66b-aea8-42fd-8a5c-bb0dbefa5f7e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"703396e9-2fc1-42dc-94b9-7e80f872c6b5","type":"BasicTicker"},{"attributes":{"source":{"id":"cad1d19e-8335-4f38-8da8-dcff18041bb2","type":"ColumnDataSource"}},"id":"92088900-7913-4cfd-9a91-ff8592bca3fc","type":"CDSView"},{"attributes":{},"id":"a101d381-6d01-4f18-be02-1d9d59b66244","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"5592d66b-aea8-42fd-8a5c-bb0dbefa5f7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"703396e9-2fc1-42dc-94b9-7e80f872c6b5","type":"BasicTicker"}},"id":"df1e3063-16e7-4faa-90a2-1241af1de124","type":"Grid"},{"attributes":{},"id":"83454dae-1150-4391-a612-58f6ab9dae91","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f62b0bdd-cccc-46e2-8625-514434fd1008","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"a101d381-6d01-4f18-be02-1d9d59b66244","type":"BasicTickFormatter"},"plot":{"id":"5592d66b-aea8-42fd-8a5c-bb0dbefa5f7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"83454dae-1150-4391-a612-58f6ab9dae91","type":"BasicTicker"}},"id":"316828a0-4511-4527-aa44-da33ffc9cfb9","type":"LinearAxis"},{"attributes":{},"id":"d7402e4d-52ba-46cd-af7c-fdeb686f02cb","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","width","height"],"data":{"height":[],"width":[],"x":[],"y":[]}},"id":"cad1d19e-8335-4f38-8da8-dcff18041bb2","type":"ColumnDataSource"}],"root_ids":["5592d66b-aea8-42fd-8a5c-bb0dbefa5f7e"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"daacf1ef-9aaf-4f09-9c7e-274d7b25b553","elementid":"16891501-6bd0-4f48-bb9d-a03f4b932d92","modelid":"5592d66b-aea8-42fd-8a5c-bb0dbefa5f7e"}];
                
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
