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
      };var element = document.getElementById("ce2f3f06-d03f-4af3-92bb-c2fa0a80a833");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ce2f3f06-d03f-4af3-92bb-c2fa0a80a833' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                    var docs_json = '{"3827379f-681f-4a70-a70e-68314695226a":{"roots":{"references":[{"attributes":{"data_source":{"id":"1f126e52-cdef-4fb9-a5d6-157e5020c1a4","type":"ColumnDataSource"},"glyph":{"id":"eea5ec65-a80d-4369-b0c6-18af1ca368ec","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0a2e707e-bea9-4399-a9c9-d242d93ebd4f","type":"VBar"},"selection_glyph":null,"view":{"id":"ed28ae09-9f42-45a1-b737-9ae3a1806eec","type":"CDSView"}},"id":"1acc391b-6665-4a18-8c89-4d0face7a801","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"0a2e707e-bea9-4399-a9c9-d242d93ebd4f","type":"VBar"},{"attributes":{},"id":"5f368228-3f24-475f-ae6a-e90c79641126","type":"BasicTicker"},{"attributes":{"source":{"id":"1f126e52-cdef-4fb9-a5d6-157e5020c1a4","type":"ColumnDataSource"}},"id":"ed28ae09-9f42-45a1-b737-9ae3a1806eec","type":"CDSView"},{"attributes":{"callback":null,"start":0},"id":"23a5be8c-be72-45ba-9311-254a383f9b9c","type":"DataRange1d"},{"attributes":{},"id":"ba96b7cc-a3cb-42ec-baa1-f1671a6b6e35","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"1f126e52-cdef-4fb9-a5d6-157e5020c1a4","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"14639974-af23-43ab-9236-aa54486b5088","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f368228-3f24-475f-ae6a-e90c79641126","type":"BasicTicker"}},"id":"5522f7d0-d616-4202-a260-784fc97deb66","type":"Grid"},{"attributes":{"formatter":{"id":"06ed0d2a-28d0-4c0b-8a4b-4e43fa45c14c","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"14639974-af23-43ab-9236-aa54486b5088","subtype":"Figure","type":"Plot"},"ticker":{"id":"60c29154-a213-4900-bfce-e7f10af1949a","type":"CategoricalTicker"}},"id":"ded3e37c-3158-4368-8519-b3a1e63cbb38","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"eea5ec65-a80d-4369-b0c6-18af1ca368ec","type":"VBar"},{"attributes":{},"id":"06ed0d2a-28d0-4c0b-8a4b-4e43fa45c14c","type":"CategoricalTickFormatter"},{"attributes":{},"id":"a3e37fcb-df0b-4fb3-9c24-5373efc1de88","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"ded3e37c-3158-4368-8519-b3a1e63cbb38","type":"CategoricalAxis"}],"left":[{"id":"bdb546ba-3d9a-4caa-a000-1f31788b157b","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"ded3e37c-3158-4368-8519-b3a1e63cbb38","type":"CategoricalAxis"},{"id":"1c4e951f-45b9-4fbe-960f-6d51442926bc","type":"Grid"},{"id":"bdb546ba-3d9a-4caa-a000-1f31788b157b","type":"LinearAxis"},{"id":"5522f7d0-d616-4202-a260-784fc97deb66","type":"Grid"},{"id":"1acc391b-6665-4a18-8c89-4d0face7a801","type":"GlyphRenderer"}],"title":{"id":"50a9f6e7-67f2-4087-b06b-a546dd9bd406","type":"Title"},"toolbar":{"id":"0b9cac2e-99a8-44d8-af4d-8a4d81066fa1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"857de698-fd4c-4623-895c-c6338eee9e11","type":"FactorRange"},"x_scale":{"id":"ba96b7cc-a3cb-42ec-baa1-f1671a6b6e35","type":"CategoricalScale"},"y_range":{"id":"23a5be8c-be72-45ba-9311-254a383f9b9c","type":"DataRange1d"},"y_scale":{"id":"98bc8c54-3026-40db-a5d0-b8348f674236","type":"LinearScale"}},"id":"14639974-af23-43ab-9236-aa54486b5088","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"857de698-fd4c-4623-895c-c6338eee9e11","type":"FactorRange"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"50a9f6e7-67f2-4087-b06b-a546dd9bd406","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0b9cac2e-99a8-44d8-af4d-8a4d81066fa1","type":"Toolbar"},{"attributes":{},"id":"60c29154-a213-4900-bfce-e7f10af1949a","type":"CategoricalTicker"},{"attributes":{},"id":"98bc8c54-3026-40db-a5d0-b8348f674236","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"14639974-af23-43ab-9236-aa54486b5088","subtype":"Figure","type":"Plot"},"ticker":{"id":"60c29154-a213-4900-bfce-e7f10af1949a","type":"CategoricalTicker"}},"id":"1c4e951f-45b9-4fbe-960f-6d51442926bc","type":"Grid"},{"attributes":{"formatter":{"id":"a3e37fcb-df0b-4fb3-9c24-5373efc1de88","type":"BasicTickFormatter"},"plot":{"id":"14639974-af23-43ab-9236-aa54486b5088","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f368228-3f24-475f-ae6a-e90c79641126","type":"BasicTicker"}},"id":"bdb546ba-3d9a-4caa-a000-1f31788b157b","type":"LinearAxis"}],"root_ids":["14639974-af23-43ab-9236-aa54486b5088"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"3827379f-681f-4a70-a70e-68314695226a","elementid":"ce2f3f06-d03f-4af3-92bb-c2fa0a80a833","modelid":"14639974-af23-43ab-9236-aa54486b5088"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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