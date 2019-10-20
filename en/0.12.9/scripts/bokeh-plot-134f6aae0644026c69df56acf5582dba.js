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
      };var element = document.getElementById("f2faac49-b6b6-40d0-9ace-1dddc54ee7d5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f2faac49-b6b6-40d0-9ace-1dddc54ee7d5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"d483be00-7ef8-444a-a506-2375038f258b":{"roots":{"references":[{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"56ded8b4-1733-40dc-8ac3-44af40878bcb","type":"FactorRange"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"70e960a7-fb4b-48e6-b05b-b7b6665177ef","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"52d33dab-0ace-486c-af1e-7e5005e1001c","type":"HoverTool"}]},"id":"2b554043-67b3-4d60-b81c-f4b55b82fb63","type":"Toolbar"},{"attributes":{},"id":"21d71671-b96a-46b4-8932-9a26c8cf1187","type":"LinearScale"},{"attributes":{"source":{"id":"24f04d3b-f8d2-4599-81a9-e66a721a3f62","type":"ColumnDataSource"}},"id":"f2405cae-9ce6-4fad-b4cc-b4618631784e","type":"CDSView"},{"attributes":{"formatter":{"id":"01da1127-d39b-4e67-81e3-05f91b8f79bb","type":"CategoricalTickFormatter"},"plot":{"id":"62e30a23-deb1-4ba0-8b59-80f0407ca1f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9fbc6cc9-ca41-4319-9b5a-9045d1cbb8d0","type":"CategoricalTicker"}},"id":"a1bb0597-7c26-4412-be89-18ba82d66133","type":"CategoricalAxis"},{"attributes":{},"id":"26b6d49a-2b05-4773-a0ec-e11e5393c5f7","type":"BasicTicker"},{"attributes":{"source":{"id":"1890bd24-e061-4560-a478-a484b9ce097e","type":"ColumnDataSource"}},"id":"16fe851f-b43f-4f78-bd53-cdbf0208b11c","type":"CDSView"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"f707147d-a170-4359-9296-863f176ef78f","type":"Segment"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"79530cc2-2561-4852-901f-eced3991affc","type":"Toolbar"},{"attributes":{},"id":"81b709ee-a6c8-44cd-bd24-b714dfe798e5","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"7276bca4-91a1-4d9e-bd9f-3d00d6a4b058","type":"Circle"},{"attributes":{"formatter":{"id":"52056d20-d8d5-4769-a3eb-51cf4bc9c293","type":"BasicTickFormatter"},"plot":{"id":"87640800-c42e-4af7-ab2f-7157ab98d779","subtype":"Figure","type":"Plot"},"ticker":{"id":"26b6d49a-2b05-4773-a0ec-e11e5393c5f7","type":"BasicTicker"}},"id":"a8329894-2224-49f5-81f6-76596b158281","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a46764e6-d878-4fd6-a168-01e8dbe2d6c5","type":"ColumnDataSource"},"glyph":{"id":"f707147d-a170-4359-9296-863f176ef78f","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e20b32a1-c277-44b4-8c97-7ca6f8b9f353","type":"Segment"},"selection_glyph":null,"view":{"id":"aff17f55-35bf-4dba-bcca-720d391cb346","type":"CDSView"}},"id":"7a33877e-fc3a-492a-965e-48f657e95401","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1890bd24-e061-4560-a478-a484b9ce097e","type":"ColumnDataSource"},"glyph":{"id":"fa023b91-9749-4f7c-8d21-d571eb59b34d","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a56f3d41-81e2-44bb-a7c4-7cc0f58acbd6","type":"Rect"},"selection_glyph":null,"view":{"id":"16fe851f-b43f-4f78-bd53-cdbf0208b11c","type":"CDSView"}},"id":"85a1469f-7dfe-4535-ad2b-38e61ce007bd","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":100},"id":"3f0a4af4-9302-4b63-90e5-a6ebd115f6f8","type":"Range1d"},{"attributes":{"below":[{"id":"1eb5df20-d70c-4383-8a69-3cb4ea429100","type":"CategoricalAxis"}],"left":[{"id":"a1bb0597-7c26-4412-be89-18ba82d66133","type":"CategoricalAxis"}],"renderers":[{"id":"1eb5df20-d70c-4383-8a69-3cb4ea429100","type":"CategoricalAxis"},{"id":"538623dd-e875-4261-a202-fb0bdd8015d0","type":"Grid"},{"id":"a1bb0597-7c26-4412-be89-18ba82d66133","type":"CategoricalAxis"},{"id":"23bcb113-409a-4661-9749-0135f2b26254","type":"Grid"},{"id":"85a1469f-7dfe-4535-ad2b-38e61ce007bd","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"84cbac59-d83e-47ec-8fcd-358182f79157","type":"Title"},"toolbar":{"id":"2b554043-67b3-4d60-b81c-f4b55b82fb63","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"70e960a7-fb4b-48e6-b05b-b7b6665177ef","type":"FactorRange"},"x_scale":{"id":"9f000873-d7a3-4e0b-8337-52b499d79aad","type":"CategoricalScale"},"y_range":{"id":"cd177184-ddc3-4950-8d91-d11b1e3edb94","type":"FactorRange"},"y_scale":{"id":"2889bee6-b830-4f5a-b3e1-970b67766d7d","type":"CategoricalScale"}},"id":"62e30a23-deb1-4ba0-8b59-80f0407ca1f8","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"84cbac59-d83e-47ec-8fcd-358182f79157","type":"Title"},{"attributes":{"plot":{"id":"87640800-c42e-4af7-ab2f-7157ab98d779","subtype":"Figure","type":"Plot"},"ticker":{"id":"26b6d49a-2b05-4773-a0ec-e11e5393c5f7","type":"BasicTicker"}},"id":"76acf825-2161-4be4-af0a-97c64e77f831","type":"Grid"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa023b91-9749-4f7c-8d21-d571eb59b34d","type":"Rect"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"65afb675-9b53-425e-9cc2-9ece499e2a1e","type":"Circle"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"61627fa8-93a9-4e2f-ae33-8f63d4b4d55f","type":"Title"},{"attributes":{"children":[{"id":"62e30a23-deb1-4ba0-8b59-80f0407ca1f8","subtype":"Figure","type":"Plot"},{"id":"87640800-c42e-4af7-ab2f-7157ab98d779","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"68aac545-3d4b-4d21-8354-30423d096bfd","type":"Row"},{"attributes":{"dimension":1,"plot":{"id":"62e30a23-deb1-4ba0-8b59-80f0407ca1f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9fbc6cc9-ca41-4319-9b5a-9045d1cbb8d0","type":"CategoricalTicker"}},"id":"23bcb113-409a-4661-9749-0135f2b26254","type":"Grid"},{"attributes":{"formatter":{"id":"c1ce0fea-8ba9-4894-bada-2a636f54c956","type":"CategoricalTickFormatter"},"plot":{"id":"87640800-c42e-4af7-ab2f-7157ab98d779","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f0f863f-4ff2-488f-b98d-6c2c80066469","type":"CategoricalTicker"}},"id":"02a67485-75d1-46b9-8492-5868c3db0eb2","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"24f04d3b-f8d2-4599-81a9-e66a721a3f62","type":"ColumnDataSource"},"glyph":{"id":"65afb675-9b53-425e-9cc2-9ece499e2a1e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7276bca4-91a1-4d9e-bd9f-3d00d6a4b058","type":"Circle"},"selection_glyph":null,"view":{"id":"f2405cae-9ce6-4fad-b4cc-b4618631784e","type":"CDSView"}},"id":"373d827f-6e85-4508-a04d-1554cd2acda6","type":"GlyphRenderer"},{"attributes":{},"id":"6b5a2d7e-c5a6-4e64-b9a5-79fac846f720","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"24f04d3b-f8d2-4599-81a9-e66a721a3f62","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]}},"id":"1890bd24-e061-4560-a478-a484b9ce097e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"a46764e6-d878-4fd6-a168-01e8dbe2d6c5","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"cd177184-ddc3-4950-8d91-d11b1e3edb94","type":"FactorRange"},{"attributes":{"source":{"id":"a46764e6-d878-4fd6-a168-01e8dbe2d6c5","type":"ColumnDataSource"}},"id":"aff17f55-35bf-4dba-bcca-720d391cb346","type":"CDSView"},{"attributes":{},"id":"2889bee6-b830-4f5a-b3e1-970b67766d7d","type":"CategoricalScale"},{"attributes":{},"id":"9f000873-d7a3-4e0b-8337-52b499d79aad","type":"CategoricalScale"},{"attributes":{"callback":null},"id":"52d33dab-0ace-486c-af1e-7e5005e1001c","type":"HoverTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"e20b32a1-c277-44b4-8c97-7ca6f8b9f353","type":"Segment"},{"attributes":{"below":[{"id":"a8329894-2224-49f5-81f6-76596b158281","type":"LinearAxis"}],"left":[{"id":"02a67485-75d1-46b9-8492-5868c3db0eb2","type":"CategoricalAxis"}],"renderers":[{"id":"a8329894-2224-49f5-81f6-76596b158281","type":"LinearAxis"},{"id":"76acf825-2161-4be4-af0a-97c64e77f831","type":"Grid"},{"id":"02a67485-75d1-46b9-8492-5868c3db0eb2","type":"CategoricalAxis"},{"id":"0f34d3cf-5527-466b-925c-89e582ced87b","type":"Grid"},{"id":"7a33877e-fc3a-492a-965e-48f657e95401","type":"GlyphRenderer"},{"id":"373d827f-6e85-4508-a04d-1554cd2acda6","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"61627fa8-93a9-4e2f-ae33-8f63d4b4d55f","type":"Title"},"toolbar":{"id":"79530cc2-2561-4852-901f-eced3991affc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3f0a4af4-9302-4b63-90e5-a6ebd115f6f8","type":"Range1d"},"x_scale":{"id":"21d71671-b96a-46b4-8932-9a26c8cf1187","type":"LinearScale"},"y_range":{"id":"56ded8b4-1733-40dc-8ac3-44af40878bcb","type":"FactorRange"},"y_scale":{"id":"f0d7c79d-fea2-47d5-a6a8-70798df84ecc","type":"CategoricalScale"}},"id":"87640800-c42e-4af7-ab2f-7157ab98d779","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"62e30a23-deb1-4ba0-8b59-80f0407ca1f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b5a2d7e-c5a6-4e64-b9a5-79fac846f720","type":"CategoricalTicker"}},"id":"538623dd-e875-4261-a202-fb0bdd8015d0","type":"Grid"},{"attributes":{},"id":"01da1127-d39b-4e67-81e3-05f91b8f79bb","type":"CategoricalTickFormatter"},{"attributes":{},"id":"52056d20-d8d5-4769-a3eb-51cf4bc9c293","type":"BasicTickFormatter"},{"attributes":{},"id":"6f0f863f-4ff2-488f-b98d-6c2c80066469","type":"CategoricalTicker"},{"attributes":{},"id":"9fbc6cc9-ca41-4319-9b5a-9045d1cbb8d0","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"87640800-c42e-4af7-ab2f-7157ab98d779","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f0f863f-4ff2-488f-b98d-6c2c80066469","type":"CategoricalTicker"}},"id":"0f34d3cf-5527-466b-925c-89e582ced87b","type":"Grid"},{"attributes":{},"id":"c1ce0fea-8ba9-4894-bada-2a636f54c956","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"a56f3d41-81e2-44bb-a7c4-7cc0f58acbd6","type":"Rect"},{"attributes":{},"id":"f0d7c79d-fea2-47d5-a6a8-70798df84ecc","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"81b709ee-a6c8-44cd-bd24-b714dfe798e5","type":"CategoricalTickFormatter"},"plot":{"id":"62e30a23-deb1-4ba0-8b59-80f0407ca1f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b5a2d7e-c5a6-4e64-b9a5-79fac846f720","type":"CategoricalTicker"}},"id":"1eb5df20-d70c-4383-8a69-3cb4ea429100","type":"CategoricalAxis"}],"root_ids":["68aac545-3d4b-4d21-8354-30423d096bfd"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"d483be00-7ef8-444a-a506-2375038f258b","elementid":"f2faac49-b6b6-40d0-9ace-1dddc54ee7d5","modelid":"68aac545-3d4b-4d21-8354-30423d096bfd"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
