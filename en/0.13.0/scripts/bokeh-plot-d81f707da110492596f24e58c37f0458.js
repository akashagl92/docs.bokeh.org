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
      };var element = document.getElementById("70b3e5c4-8388-4402-8dd5-e70d021debbf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '70b3e5c4-8388-4402-8dd5-e70d021debbf' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"3e13bdf3-b3da-4d9c-aac4-b10aeb58c48c":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"0a412bfa-62ec-41e2-ac85-e527651cb5c1","type":"HoverTool"}]},"id":"a69b7a9c-c973-4440-b941-ad409ac680d5","type":"Toolbar"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"acea807c-d240-48e2-b426-d8b1920df56b","type":"Title"},{"attributes":{"plot":{"id":"d62f295b-4dbf-4e6c-8c0f-113c5e5f6602","subtype":"Figure","type":"Plot"},"ticker":{"id":"0482ff7a-8763-4c15-8815-3149e68df020","type":"BasicTicker"}},"id":"ee4734e6-c131-4aee-ab32-6cdf0464a439","type":"Grid"},{"attributes":{},"id":"c300cb20-e922-495a-b28d-25480f96eb5c","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c7d234e-7f86-42f1-8fa3-375bffa220f7","type":"Rect"},{"attributes":{},"id":"18f4e278-dd82-44ac-a4af-14e0136ad550","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"23780117-765f-4200-8055-7214708df558","type":"Title"},{"attributes":{"source":{"id":"8c8dd9aa-13cb-4926-a0fa-bd54bb8182cb","type":"ColumnDataSource"}},"id":"d89d894b-8e78-4721-a907-bfb98ec152e8","type":"CDSView"},{"attributes":{"data_source":{"id":"ab1678d4-ae7b-4b80-9b0c-85bab4647044","type":"ColumnDataSource"},"glyph":{"id":"b01e6e56-bbf2-46c2-b869-c4ca8d58102b","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b26f2eb7-e43b-422d-80ad-4b820c13cc99","type":"Segment"},"selection_glyph":null,"view":{"id":"24566fcf-04a2-485b-9c04-6bc7fb479276","type":"CDSView"}},"id":"f87ecb5b-dc25-46ec-b80d-9903ee98b6ac","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"83bd9915-4c36-4255-b44e-ca70cd32d0ee","type":"CategoricalTickFormatter"},"plot":{"id":"e0d24c6d-880a-4aa5-8786-8a8cf1b65911","subtype":"Figure","type":"Plot"},"ticker":{"id":"3183e0ca-5f49-4878-9aff-049ef18b0385","type":"CategoricalTicker"}},"id":"7149732e-713d-4da8-b5f0-e41b65db350d","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"c37ab494-2e23-4beb-b180-46ca6d546447","type":"BasicTickFormatter"},"plot":{"id":"d62f295b-4dbf-4e6c-8c0f-113c5e5f6602","subtype":"Figure","type":"Plot"},"ticker":{"id":"0482ff7a-8763-4c15-8815-3149e68df020","type":"BasicTicker"}},"id":"ca9787d9-be86-403a-a652-cd1e4978690e","type":"LinearAxis"},{"attributes":{},"id":"8ff857c1-b006-44a6-98ae-b641839688b7","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"renderers":"auto"},"id":"0a412bfa-62ec-41e2-ac85-e527651cb5c1","type":"HoverTool"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"b6537650-633d-4afb-8da7-5d1b679dd6f4","type":"Selection"},"selection_policy":{"id":"273f1bc3-316b-4466-b07e-345e414c4184","type":"UnionRenderers"}},"id":"ea3b93b0-df35-405f-8ca0-76bb2e8721d5","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e0d24c6d-880a-4aa5-8786-8a8cf1b65911","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bd74d27-1147-4610-82aa-5567955bb7ad","type":"CategoricalTicker"}},"id":"5b57ea4d-0050-4e9d-9f5d-7271f311f151","type":"Grid"},{"attributes":{"below":[{"id":"ca9787d9-be86-403a-a652-cd1e4978690e","type":"LinearAxis"}],"left":[{"id":"9883c43b-c1de-4392-a2ba-e3e930c339dd","type":"CategoricalAxis"}],"renderers":[{"id":"ca9787d9-be86-403a-a652-cd1e4978690e","type":"LinearAxis"},{"id":"ee4734e6-c131-4aee-ab32-6cdf0464a439","type":"Grid"},{"id":"9883c43b-c1de-4392-a2ba-e3e930c339dd","type":"CategoricalAxis"},{"id":"c991fce5-cc31-49cb-83fb-56eef7edbcd2","type":"Grid"},{"id":"f87ecb5b-dc25-46ec-b80d-9903ee98b6ac","type":"GlyphRenderer"},{"id":"afa59263-4cd6-4e30-b538-0edf24b3dd6a","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"acea807c-d240-48e2-b426-d8b1920df56b","type":"Title"},"toolbar":{"id":"03f05a51-a555-4be7-a319-f3e4bdc9b950","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"161e710d-b171-4956-9b67-67b2e5fbb5df","type":"Range1d"},"x_scale":{"id":"c300cb20-e922-495a-b28d-25480f96eb5c","type":"LinearScale"},"y_range":{"id":"0204f431-6d63-4bad-82ae-1c1e9c9e0a1e","type":"FactorRange"},"y_scale":{"id":"fbc9bbb1-aa70-419b-9e13-47ab8c561ae5","type":"CategoricalScale"}},"id":"d62f295b-4dbf-4e6c-8c0f-113c5e5f6602","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5b70b75f-f057-4749-8d27-feb8f6ccf9d2","type":"CategoricalTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"e0d24c6d-880a-4aa5-8786-8a8cf1b65911","subtype":"Figure","type":"Plot"},"ticker":{"id":"3183e0ca-5f49-4878-9aff-049ef18b0385","type":"CategoricalTicker"}},"id":"26ca5fed-f83d-42ab-8388-bec4dc942e44","type":"Grid"},{"attributes":{},"id":"df4e1a0f-2763-4ab0-805d-17646604b690","type":"Selection"},{"attributes":{"below":[{"id":"7e436300-1410-4d8d-ab3d-2061f86e6175","type":"CategoricalAxis"}],"left":[{"id":"7149732e-713d-4da8-b5f0-e41b65db350d","type":"CategoricalAxis"}],"renderers":[{"id":"7e436300-1410-4d8d-ab3d-2061f86e6175","type":"CategoricalAxis"},{"id":"5b57ea4d-0050-4e9d-9f5d-7271f311f151","type":"Grid"},{"id":"7149732e-713d-4da8-b5f0-e41b65db350d","type":"CategoricalAxis"},{"id":"26ca5fed-f83d-42ab-8388-bec4dc942e44","type":"Grid"},{"id":"c910100e-918e-427c-8005-ec065782fb28","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"23780117-765f-4200-8055-7214708df558","type":"Title"},"toolbar":{"id":"a69b7a9c-c973-4440-b941-ad409ac680d5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"16669e78-e200-43a0-b4c2-2395ecd56774","type":"FactorRange"},"x_scale":{"id":"f09319f0-b561-4ec0-ad7a-e4d4ca3b0e72","type":"CategoricalScale"},"y_range":{"id":"8e0a11bc-4bd4-40bb-8b2a-d22c009bf786","type":"FactorRange"},"y_scale":{"id":"fc518b30-c4fe-4f82-a330-faa0cd5d1ae8","type":"CategoricalScale"}},"id":"e0d24c6d-880a-4aa5-8786-8a8cf1b65911","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"8c8dd9aa-13cb-4926-a0fa-bd54bb8182cb","type":"ColumnDataSource"},"glyph":{"id":"b5d2ca41-8432-4805-9c53-5ac673da509a","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4c7d234e-7f86-42f1-8fa3-375bffa220f7","type":"Rect"},"selection_glyph":null,"view":{"id":"d89d894b-8e78-4721-a907-bfb98ec152e8","type":"CDSView"}},"id":"c910100e-918e-427c-8005-ec065782fb28","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"16669e78-e200-43a0-b4c2-2395ecd56774","type":"FactorRange"},{"attributes":{"callback":null,"end":100},"id":"161e710d-b171-4956-9b67-67b2e5fbb5df","type":"Range1d"},{"attributes":{"children":[{"id":"e0d24c6d-880a-4aa5-8786-8a8cf1b65911","subtype":"Figure","type":"Plot"},{"id":"d62f295b-4dbf-4e6c-8c0f-113c5e5f6602","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"7d6ee3b8-55be-4592-95ae-618466527303","type":"Row"},{"attributes":{},"id":"3183e0ca-5f49-4878-9aff-049ef18b0385","type":"CategoricalTicker"},{"attributes":{},"id":"b6537650-633d-4afb-8da7-5d1b679dd6f4","type":"Selection"},{"attributes":{},"id":"f09319f0-b561-4ec0-ad7a-e4d4ca3b0e72","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"0204f431-6d63-4bad-82ae-1c1e9c9e0a1e","type":"FactorRange"},{"attributes":{},"id":"fc518b30-c4fe-4f82-a330-faa0cd5d1ae8","type":"CategoricalScale"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5d2ca41-8432-4805-9c53-5ac673da509a","type":"Rect"},{"attributes":{"formatter":{"id":"8ff857c1-b006-44a6-98ae-b641839688b7","type":"CategoricalTickFormatter"},"plot":{"id":"e0d24c6d-880a-4aa5-8786-8a8cf1b65911","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bd74d27-1147-4610-82aa-5567955bb7ad","type":"CategoricalTicker"}},"id":"7e436300-1410-4d8d-ab3d-2061f86e6175","type":"CategoricalAxis"},{"attributes":{},"id":"37fe330c-2602-40dc-b552-193c68734999","type":"UnionRenderers"},{"attributes":{},"id":"fbc9bbb1-aa70-419b-9e13-47ab8c561ae5","type":"CategoricalScale"},{"attributes":{"callback":null,"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]},"selected":{"id":"df4e1a0f-2763-4ab0-805d-17646604b690","type":"Selection"},"selection_policy":{"id":"18f4e278-dd82-44ac-a4af-14e0136ad550","type":"UnionRenderers"}},"id":"8c8dd9aa-13cb-4926-a0fa-bd54bb8182cb","type":"ColumnDataSource"},{"attributes":{},"id":"9bd74d27-1147-4610-82aa-5567955bb7ad","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"5b70b75f-f057-4749-8d27-feb8f6ccf9d2","type":"CategoricalTickFormatter"},"plot":{"id":"d62f295b-4dbf-4e6c-8c0f-113c5e5f6602","subtype":"Figure","type":"Plot"},"ticker":{"id":"44c4e4f8-ae61-464b-bae8-d85743d7d37c","type":"CategoricalTicker"}},"id":"9883c43b-c1de-4392-a2ba-e3e930c339dd","type":"CategoricalAxis"},{"attributes":{"callback":null,"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]},"selected":{"id":"348983e3-2143-4460-85cb-baefedd5e407","type":"Selection"},"selection_policy":{"id":"37fe330c-2602-40dc-b552-193c68734999","type":"UnionRenderers"}},"id":"ab1678d4-ae7b-4b80-9b0c-85bab4647044","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"b01e6e56-bbf2-46c2-b869-c4ca8d58102b","type":"Segment"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"8e0a11bc-4bd4-40bb-8b2a-d22c009bf786","type":"FactorRange"},{"attributes":{},"id":"0482ff7a-8763-4c15-8815-3149e68df020","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b71c9b3-e820-4a51-844a-8f302926f1ad","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"b26f2eb7-e43b-422d-80ad-4b820c13cc99","type":"Segment"},{"attributes":{},"id":"83bd9915-4c36-4255-b44e-ca70cd32d0ee","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"ea3b93b0-df35-405f-8ca0-76bb2e8721d5","type":"ColumnDataSource"}},"id":"b3bc5707-1091-47d4-a394-e4e5e1bb966a","type":"CDSView"},{"attributes":{},"id":"273f1bc3-316b-4466-b07e-345e414c4184","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"ea3b93b0-df35-405f-8ca0-76bb2e8721d5","type":"ColumnDataSource"},"glyph":{"id":"1b71c9b3-e820-4a51-844a-8f302926f1ad","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a64ac1ff-7581-48e3-8b61-738b27ed5f5c","type":"Circle"},"selection_glyph":null,"view":{"id":"b3bc5707-1091-47d4-a394-e4e5e1bb966a","type":"CDSView"}},"id":"afa59263-4cd6-4e30-b538-0edf24b3dd6a","type":"GlyphRenderer"},{"attributes":{},"id":"c37ab494-2e23-4beb-b180-46ca6d546447","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"d62f295b-4dbf-4e6c-8c0f-113c5e5f6602","subtype":"Figure","type":"Plot"},"ticker":{"id":"44c4e4f8-ae61-464b-bae8-d85743d7d37c","type":"CategoricalTicker"}},"id":"c991fce5-cc31-49cb-83fb-56eef7edbcd2","type":"Grid"},{"attributes":{},"id":"44c4e4f8-ae61-464b-bae8-d85743d7d37c","type":"CategoricalTicker"},{"attributes":{"source":{"id":"ab1678d4-ae7b-4b80-9b0c-85bab4647044","type":"ColumnDataSource"}},"id":"24566fcf-04a2-485b-9c04-6bc7fb479276","type":"CDSView"},{"attributes":{},"id":"348983e3-2143-4460-85cb-baefedd5e407","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a64ac1ff-7581-48e3-8b61-738b27ed5f5c","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"03f05a51-a555-4be7-a319-f3e4bdc9b950","type":"Toolbar"}],"root_ids":["7d6ee3b8-55be-4592-95ae-618466527303"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"3e13bdf3-b3da-4d9c-aac4-b10aeb58c48c","roots":{"7d6ee3b8-55be-4592-95ae-618466527303":"70b3e5c4-8388-4402-8dd5-e70d021debbf"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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