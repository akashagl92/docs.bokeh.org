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
      };var element = document.getElementById("960c650c-e975-4886-b324-d23f079d7bcf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '960c650c-e975-4886-b324-d23f079d7bcf' but no matching script tag was found. ")
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
                    var docs_json = {"dbd1f1b5-8a1e-4469-a6db-4aa939db6ca9":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"30ef8c74-331c-4f88-a02e-7f09aad71a66","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a9ca3d0-4ae4-4b5c-acaf-aaa971b5f276","type":"BasicTicker"}},"id":"106e0add-c1cb-4103-9803-76f2a8626f06","type":"Grid"},{"attributes":{},"id":"d57fac03-e04b-4643-bebb-6cb7cec3a590","type":"LinearScale"},{"attributes":{"callback":null,"start":0},"id":"a2a20256-b7fe-4e72-ad15-2b56a59f023d","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"5ab8112c-ec61-4193-82eb-c64b0aedf033","type":"VBar"},{"attributes":{},"id":"fdd3cdc6-4c42-49b9-a10e-4ef11c50288f","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"454c64d3-8baf-4c41-af08-25b4a0986f11","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"41d3537f-1af3-483c-a3d6-565a8ca8fb7d","type":"CategoricalAxis"}],"left":[{"id":"ed424f9c-b21c-4eae-8cd1-c5ff97c3a124","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"41d3537f-1af3-483c-a3d6-565a8ca8fb7d","type":"CategoricalAxis"},{"id":"1e9299ec-96dd-410d-8d72-6801214e0499","type":"Grid"},{"id":"ed424f9c-b21c-4eae-8cd1-c5ff97c3a124","type":"LinearAxis"},{"id":"106e0add-c1cb-4103-9803-76f2a8626f06","type":"Grid"},{"id":"908a9a4c-cecc-49e9-a0d0-3540134049db","type":"GlyphRenderer"}],"title":{"id":"c2f38d85-bbe3-4b33-8f3f-d437ac22d9c5","type":"Title"},"toolbar":{"id":"d7795cc2-7452-462d-a5f1-7544a0e1caff","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fe5c7915-ccd1-4e57-9dd5-83a1846ad72c","type":"FactorRange"},"x_scale":{"id":"3a8db7c1-5c68-4279-ac56-e89ed6d7707a","type":"CategoricalScale"},"y_range":{"id":"a2a20256-b7fe-4e72-ad15-2b56a59f023d","type":"DataRange1d"},"y_scale":{"id":"d57fac03-e04b-4643-bebb-6cb7cec3a590","type":"LinearScale"}},"id":"30ef8c74-331c-4f88-a02e-7f09aad71a66","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d7795cc2-7452-462d-a5f1-7544a0e1caff","type":"Toolbar"},{"attributes":{"data_source":{"id":"454c64d3-8baf-4c41-af08-25b4a0986f11","type":"ColumnDataSource"},"glyph":{"id":"5ab8112c-ec61-4193-82eb-c64b0aedf033","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f6bd00ae-d8b1-4aba-8074-d7b66a52b7e1","type":"VBar"},"selection_glyph":null,"view":{"id":"f860da8b-bda0-481e-8688-cf448bb1cea6","type":"CDSView"}},"id":"908a9a4c-cecc-49e9-a0d0-3540134049db","type":"GlyphRenderer"},{"attributes":{},"id":"2a9ca3d0-4ae4-4b5c-acaf-aaa971b5f276","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"30ef8c74-331c-4f88-a02e-7f09aad71a66","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdd3cdc6-4c42-49b9-a10e-4ef11c50288f","type":"CategoricalTicker"}},"id":"1e9299ec-96dd-410d-8d72-6801214e0499","type":"Grid"},{"attributes":{},"id":"de2d0476-150d-41f8-acac-0be084b5828b","type":"CategoricalTickFormatter"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"c2f38d85-bbe3-4b33-8f3f-d437ac22d9c5","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"f6bd00ae-d8b1-4aba-8074-d7b66a52b7e1","type":"VBar"},{"attributes":{},"id":"3a8db7c1-5c68-4279-ac56-e89ed6d7707a","type":"CategoricalScale"},{"attributes":{},"id":"5b17407a-cc81-45f5-917e-9270beb37047","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"5b17407a-cc81-45f5-917e-9270beb37047","type":"BasicTickFormatter"},"plot":{"id":"30ef8c74-331c-4f88-a02e-7f09aad71a66","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a9ca3d0-4ae4-4b5c-acaf-aaa971b5f276","type":"BasicTicker"}},"id":"ed424f9c-b21c-4eae-8cd1-c5ff97c3a124","type":"LinearAxis"},{"attributes":{"formatter":{"id":"de2d0476-150d-41f8-acac-0be084b5828b","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"30ef8c74-331c-4f88-a02e-7f09aad71a66","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdd3cdc6-4c42-49b9-a10e-4ef11c50288f","type":"CategoricalTicker"}},"id":"41d3537f-1af3-483c-a3d6-565a8ca8fb7d","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"fe5c7915-ccd1-4e57-9dd5-83a1846ad72c","type":"FactorRange"},{"attributes":{"source":{"id":"454c64d3-8baf-4c41-af08-25b4a0986f11","type":"ColumnDataSource"}},"id":"f860da8b-bda0-481e-8688-cf448bb1cea6","type":"CDSView"}],"root_ids":["30ef8c74-331c-4f88-a02e-7f09aad71a66"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"dbd1f1b5-8a1e-4469-a6db-4aa939db6ca9","elementid":"960c650c-e975-4886-b324-d23f079d7bcf","modelid":"30ef8c74-331c-4f88-a02e-7f09aad71a66"}];
                
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
