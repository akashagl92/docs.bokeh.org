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
      };var element = document.getElementById("33348c25-4f74-4e21-a5c2-eb2e4186dc92");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '33348c25-4f74-4e21-a5c2-eb2e4186dc92' but no matching script tag was found. ")
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
                    var docs_json = {"61ae970a-2975-4992-be14-79253f0426a7":{"roots":{"references":[{"attributes":{},"id":"16f0d22b-94f8-40c7-bb4d-3f16169ea0a2","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"6e0cc4bd-9ce3-44ee-8e76-e7045e885fd9","type":"Title"},{"attributes":{"formatter":{"id":"5ae3ec46-4b57-43c3-bec0-8ccafea5c7ca","type":"BasicTickFormatter"},"plot":{"id":"42f18d5b-d449-41af-a4c1-ff17b922ce58","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad25d205-8f00-43fc-8e58-cc91ffc0297b","type":"BasicTicker"}},"id":"ee02e835-ee14-445b-947d-b5ab04dfb505","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a132838a-db8c-4dcc-b47e-075fa97019f1","type":"Circle"},{"attributes":{"callback":null},"id":"a0f8dbd6-5ce7-4329-9bea-d64730bfe532","type":"TapTool"},{"attributes":{},"id":"ad25d205-8f00-43fc-8e58-cc91ffc0297b","type":"BasicTicker"},{"attributes":{},"id":"f22d6427-866e-4567-b68e-6695e4e68ff5","type":"LinearScale"},{"attributes":{"source":{"id":"c9510bf3-3668-49a6-ad18-20fc27d4c6a7","type":"ColumnDataSource"}},"id":"0290b303-d34b-4580-ab1f-ebe26be960c8","type":"CDSView"},{"attributes":{"formatter":{"id":"16f0d22b-94f8-40c7-bb4d-3f16169ea0a2","type":"BasicTickFormatter"},"plot":{"id":"42f18d5b-d449-41af-a4c1-ff17b922ce58","subtype":"Figure","type":"Plot"},"ticker":{"id":"51e2f633-6237-46a5-9146-8e8f83760b5b","type":"BasicTicker"}},"id":"82d91080-e580-4a8b-8ffb-96ccff443b12","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a0f8dbd6-5ce7-4329-9bea-d64730bfe532","type":"TapTool"}]},"id":"f4e7651d-ed61-4141-b903-d5af798ca2f0","type":"Toolbar"},{"attributes":{"below":[{"id":"82d91080-e580-4a8b-8ffb-96ccff443b12","type":"LinearAxis"}],"left":[{"id":"ee02e835-ee14-445b-947d-b5ab04dfb505","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"82d91080-e580-4a8b-8ffb-96ccff443b12","type":"LinearAxis"},{"id":"234d2469-3134-4ca6-a14e-186716225d6d","type":"Grid"},{"id":"ee02e835-ee14-445b-947d-b5ab04dfb505","type":"LinearAxis"},{"id":"38f8312f-9bd9-489c-81a8-e4d0aa05a254","type":"Grid"},{"id":"6f560aa3-a2e5-4fd6-b2a6-a42d94a95d27","type":"GlyphRenderer"}],"title":{"id":"6e0cc4bd-9ce3-44ee-8e76-e7045e885fd9","type":"Title"},"toolbar":{"id":"f4e7651d-ed61-4141-b903-d5af798ca2f0","type":"Toolbar"},"x_range":{"id":"e9c88796-6896-4106-a451-31ae1a751d75","type":"DataRange1d"},"x_scale":{"id":"f22d6427-866e-4567-b68e-6695e4e68ff5","type":"LinearScale"},"y_range":{"id":"af086a4d-75af-449a-b2a7-e4e8bf881cda","type":"DataRange1d"},"y_scale":{"id":"31d9b28b-17af-49ad-a72b-93d07076445d","type":"LinearScale"}},"id":"42f18d5b-d449-41af-a4c1-ff17b922ce58","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"af086a4d-75af-449a-b2a7-e4e8bf881cda","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"c9510bf3-3668-49a6-ad18-20fc27d4c6a7","type":"ColumnDataSource"},{"attributes":{},"id":"5ae3ec46-4b57-43c3-bec0-8ccafea5c7ca","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"e9c88796-6896-4106-a451-31ae1a751d75","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"42f18d5b-d449-41af-a4c1-ff17b922ce58","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad25d205-8f00-43fc-8e58-cc91ffc0297b","type":"BasicTicker"}},"id":"38f8312f-9bd9-489c-81a8-e4d0aa05a254","type":"Grid"},{"attributes":{"plot":{"id":"42f18d5b-d449-41af-a4c1-ff17b922ce58","subtype":"Figure","type":"Plot"},"ticker":{"id":"51e2f633-6237-46a5-9146-8e8f83760b5b","type":"BasicTicker"}},"id":"234d2469-3134-4ca6-a14e-186716225d6d","type":"Grid"},{"attributes":{},"id":"31d9b28b-17af-49ad-a72b-93d07076445d","type":"LinearScale"},{"attributes":{},"id":"51e2f633-6237-46a5-9146-8e8f83760b5b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"c9510bf3-3668-49a6-ad18-20fc27d4c6a7","type":"ColumnDataSource"},"glyph":{"id":"a132838a-db8c-4dcc-b47e-075fa97019f1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ccc5d0ce-a7e9-4b71-b64f-6657cf08a21e","type":"Circle"},"selection_glyph":{"id":"ab361c1d-f8ce-4e7d-9f82-a30bc427f625","type":"Circle"},"view":{"id":"0290b303-d34b-4580-ab1f-ebe26be960c8","type":"CDSView"}},"id":"6f560aa3-a2e5-4fd6-b2a6-a42d94a95d27","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ccc5d0ce-a7e9-4b71-b64f-6657cf08a21e","type":"Circle"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab361c1d-f8ce-4e7d-9f82-a30bc427f625","type":"Circle"}],"root_ids":["42f18d5b-d449-41af-a4c1-ff17b922ce58"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"61ae970a-2975-4992-be14-79253f0426a7","elementid":"33348c25-4f74-4e21-a5c2-eb2e4186dc92","modelid":"42f18d5b-d449-41af-a4c1-ff17b922ce58"}];
                
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
