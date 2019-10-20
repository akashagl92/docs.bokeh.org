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
      };var element = document.getElementById("3cc59129-1afb-4b9f-8263-7cf0cd48261e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3cc59129-1afb-4b9f-8263-7cf0cd48261e' but no matching script tag was found. ")
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
                    var docs_json = {"0146bf2b-d892-4e6a-91fe-22cf989155a0":{"roots":{"references":[{"attributes":{"callback":null},"id":"d06251d4-758b-4035-b92b-6a9dce61dec7","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"a839790f-717e-4053-a331-f5273472e7cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"da9ec736-0d21-4180-807c-5efe03f975b4","type":"BasicTicker"}},"id":"44c700d5-198d-491d-a5d4-cf893c9d6720","type":"Grid"},{"attributes":{"formatter":{"id":"7b91bea5-3064-4db8-9b86-2a3b29a8160d","type":"BasicTickFormatter"},"plot":{"id":"a839790f-717e-4053-a331-f5273472e7cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c3e1587-224d-4a23-9747-54e3bb38653f","type":"BasicTicker"}},"id":"cf95839a-cd14-4e05-93df-9340861d8a8f","type":"LinearAxis"},{"attributes":{},"id":"7dacfbdf-1c7e-48b4-8271-aa1066d7f583","type":"LinearScale"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"9281bd3a-ea59-436d-9ddd-c13997cc7d33","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"17749ce3-7966-421f-89f6-ac0f43a2ca34","type":"Circle"},{"attributes":{"plot":{"id":"a839790f-717e-4053-a331-f5273472e7cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c3e1587-224d-4a23-9747-54e3bb38653f","type":"BasicTicker"}},"id":"9c614e55-148d-4bdd-a4ba-190acd1eb7df","type":"Grid"},{"attributes":{"source":{"id":"9fbfa8bf-efbf-42c5-a9ce-2aa14bc387ef","type":"ColumnDataSource"}},"id":"06b1f36f-56c5-47ca-a316-38ec5532464b","type":"CDSView"},{"attributes":{"data_source":{"id":"9fbfa8bf-efbf-42c5-a9ce-2aa14bc387ef","type":"ColumnDataSource"},"glyph":{"id":"17749ce3-7966-421f-89f6-ac0f43a2ca34","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6d0718a8-fcf6-4b3e-9d03-f2eac3fbdb19","type":"Circle"},"selection_glyph":null,"view":{"id":"06b1f36f-56c5-47ca-a316-38ec5532464b","type":"CDSView"}},"id":"a5d4dc56-41dc-4933-9f37-a3baa9424626","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","desc"],"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"9fbfa8bf-efbf-42c5-a9ce-2aa14bc387ef","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"e6a82d24-9812-41a6-b84f-1b444b33f804","type":"BasicTickFormatter"},"plot":{"id":"a839790f-717e-4053-a331-f5273472e7cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"da9ec736-0d21-4180-807c-5efe03f975b4","type":"BasicTicker"}},"id":"6fc845d8-8bb1-42b4-aac8-550b3de185d9","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"6d0718a8-fcf6-4b3e-9d03-f2eac3fbdb19","type":"Circle"},{"attributes":{"callback":null,"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"0c79e37a-96c2-4fce-bd0f-1386a9fa6679","type":"HoverTool"},{"attributes":{"below":[{"id":"cf95839a-cd14-4e05-93df-9340861d8a8f","type":"LinearAxis"}],"left":[{"id":"6fc845d8-8bb1-42b4-aac8-550b3de185d9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cf95839a-cd14-4e05-93df-9340861d8a8f","type":"LinearAxis"},{"id":"9c614e55-148d-4bdd-a4ba-190acd1eb7df","type":"Grid"},{"id":"6fc845d8-8bb1-42b4-aac8-550b3de185d9","type":"LinearAxis"},{"id":"44c700d5-198d-491d-a5d4-cf893c9d6720","type":"Grid"},{"id":"a5d4dc56-41dc-4933-9f37-a3baa9424626","type":"GlyphRenderer"}],"title":{"id":"9281bd3a-ea59-436d-9ddd-c13997cc7d33","type":"Title"},"toolbar":{"id":"2a289a5b-55ca-4b6a-afb1-b3019c8dc94a","type":"Toolbar"},"x_range":{"id":"d06251d4-758b-4035-b92b-6a9dce61dec7","type":"DataRange1d"},"x_scale":{"id":"1dd5799c-6db7-4475-85e6-3c732d8b29aa","type":"LinearScale"},"y_range":{"id":"e32d164b-3d95-4a96-90a3-28c9a6e56ef3","type":"DataRange1d"},"y_scale":{"id":"7dacfbdf-1c7e-48b4-8271-aa1066d7f583","type":"LinearScale"}},"id":"a839790f-717e-4053-a331-f5273472e7cb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e6a82d24-9812-41a6-b84f-1b444b33f804","type":"BasicTickFormatter"},{"attributes":{},"id":"da9ec736-0d21-4180-807c-5efe03f975b4","type":"BasicTicker"},{"attributes":{"callback":null},"id":"e32d164b-3d95-4a96-90a3-28c9a6e56ef3","type":"DataRange1d"},{"attributes":{},"id":"7b91bea5-3064-4db8-9b86-2a3b29a8160d","type":"BasicTickFormatter"},{"attributes":{},"id":"1dd5799c-6db7-4475-85e6-3c732d8b29aa","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0c79e37a-96c2-4fce-bd0f-1386a9fa6679","type":"HoverTool"}]},"id":"2a289a5b-55ca-4b6a-afb1-b3019c8dc94a","type":"Toolbar"},{"attributes":{},"id":"2c3e1587-224d-4a23-9747-54e3bb38653f","type":"BasicTicker"}],"root_ids":["a839790f-717e-4053-a331-f5273472e7cb"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"0146bf2b-d892-4e6a-91fe-22cf989155a0","elementid":"3cc59129-1afb-4b9f-8263-7cf0cd48261e","modelid":"a839790f-717e-4053-a331-f5273472e7cb"}];
                
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
