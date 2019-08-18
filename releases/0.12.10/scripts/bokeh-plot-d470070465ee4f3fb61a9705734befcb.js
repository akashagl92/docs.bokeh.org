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
      };var element = document.getElementById("72eb4475-d0f1-41ec-81a1-2bf8ecad2187");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '72eb4475-d0f1-41ec-81a1-2bf8ecad2187' but no matching script tag was found. ")
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
                    var docs_json = {"e4f56e66-f5fd-40a1-b87a-41e1e44e99df":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]}},"id":"5d49c778-4221-40b5-b809-5c99a8663f90","type":"ColumnDataSource"},{"attributes":{},"id":"474ec1b4-d456-44ba-b3ed-165d4eeaeca6","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5d49c778-4221-40b5-b809-5c99a8663f90","type":"ColumnDataSource"},"glyph":{"id":"783e46b1-66f3-4a98-b105-6eb153c0b6a2","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0a572845-594e-4b96-b3ad-09c56dd83f45","type":"VBar"},"selection_glyph":null,"view":{"id":"d8b6d686-8fea-429d-9ee1-ae2638b4c504","type":"CDSView"}},"id":"98861667-4313-4aac-a94f-6f5ce62fdf7c","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"2ccb841f-7583-447f-9697-49e400bb8a12","type":"FactorRange"},{"attributes":{"dimension":1,"plot":{"id":"083fedca-6169-4fd6-a566-dfebc29f2cb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"474ec1b4-d456-44ba-b3ed-165d4eeaeca6","type":"BasicTicker"}},"id":"cbfc052f-9360-4c4e-a751-c3b04bf50eda","type":"Grid"},{"attributes":{},"id":"078008a6-875a-4aa3-b87c-f169d34ac0ce","type":"CategoricalTicker"},{"attributes":{"source":{"id":"401e4997-11fb-46ed-b1a4-084c4e40339d","type":"ColumnDataSource"}},"id":"307271ee-0c08-4667-a1fb-e76f344360bb","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"7ff163f2-fd25-4ab3-affe-38a34d7089e2","type":"Title"},{"attributes":{"line_color":{"value":"red"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac59c15c-0087-4c88-98f2-c733129a75b1","type":"Line"},{"attributes":{"formatter":{"id":"548385df-15bd-46cc-824a-5fa07604f9a5","type":"BasicTickFormatter"},"plot":{"id":"083fedca-6169-4fd6-a566-dfebc29f2cb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"474ec1b4-d456-44ba-b3ed-165d4eeaeca6","type":"BasicTicker"}},"id":"ed576150-8bca-42db-9713-0335d4e4dfce","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"6677019f-a758-4565-b583-9957f017c498","type":"Toolbar"},{"attributes":{"formatter":{"id":"caa257ac-0f19-47e9-b4c9-9f6cf8448f8f","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"083fedca-6169-4fd6-a566-dfebc29f2cb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"078008a6-875a-4aa3-b87c-f169d34ac0ce","type":"CategoricalTicker"}},"id":"d0f11165-9552-4bac-8ff9-9473f55c99e8","type":"CategoricalAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d0c046d3-5bc3-4748-a0c8-353d28a32028","type":"Line"},{"attributes":{},"id":"caa257ac-0f19-47e9-b4c9-9f6cf8448f8f","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"783e46b1-66f3-4a98-b105-6eb153c0b6a2","type":"VBar"},{"attributes":{"data_source":{"id":"401e4997-11fb-46ed-b1a4-084c4e40339d","type":"ColumnDataSource"},"glyph":{"id":"ac59c15c-0087-4c88-98f2-c733129a75b1","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d0c046d3-5bc3-4748-a0c8-353d28a32028","type":"Line"},"selection_glyph":null,"view":{"id":"307271ee-0c08-4667-a1fb-e76f344360bb","type":"CDSView"}},"id":"19e6923c-8bf3-49e7-a059-483e26b62d80","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"083fedca-6169-4fd6-a566-dfebc29f2cb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"078008a6-875a-4aa3-b87c-f169d34ac0ce","type":"CategoricalTicker"}},"id":"60f35847-bd02-44c9-a59b-02ecbec22da2","type":"Grid"},{"attributes":{},"id":"2308ac1b-97c2-4829-ae7b-e33252458b80","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"0a572845-594e-4b96-b3ad-09c56dd83f45","type":"VBar"},{"attributes":{"below":[{"id":"d0f11165-9552-4bac-8ff9-9473f55c99e8","type":"CategoricalAxis"}],"left":[{"id":"ed576150-8bca-42db-9713-0335d4e4dfce","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"d0f11165-9552-4bac-8ff9-9473f55c99e8","type":"CategoricalAxis"},{"id":"60f35847-bd02-44c9-a59b-02ecbec22da2","type":"Grid"},{"id":"ed576150-8bca-42db-9713-0335d4e4dfce","type":"LinearAxis"},{"id":"cbfc052f-9360-4c4e-a751-c3b04bf50eda","type":"Grid"},{"id":"98861667-4313-4aac-a94f-6f5ce62fdf7c","type":"GlyphRenderer"},{"id":"19e6923c-8bf3-49e7-a059-483e26b62d80","type":"GlyphRenderer"}],"title":{"id":"7ff163f2-fd25-4ab3-affe-38a34d7089e2","type":"Title"},"toolbar":{"id":"6677019f-a758-4565-b583-9957f017c498","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2ccb841f-7583-447f-9697-49e400bb8a12","type":"FactorRange"},"x_scale":{"id":"93f9ed67-a0cd-4767-9cac-e0f779598741","type":"CategoricalScale"},"y_range":{"id":"1bdf962a-eee9-477e-9cba-6ba499f14288","type":"DataRange1d"},"y_scale":{"id":"2308ac1b-97c2-4829-ae7b-e33252458b80","type":"LinearScale"}},"id":"083fedca-6169-4fd6-a566-dfebc29f2cb0","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"start":0},"id":"1bdf962a-eee9-477e-9cba-6ba499f14288","type":"DataRange1d"},{"attributes":{"source":{"id":"5d49c778-4221-40b5-b809-5c99a8663f90","type":"ColumnDataSource"}},"id":"d8b6d686-8fea-429d-9ee1-ae2638b4c504","type":"CDSView"},{"attributes":{},"id":"548385df-15bd-46cc-824a-5fa07604f9a5","type":"BasicTickFormatter"},{"attributes":{},"id":"93f9ed67-a0cd-4767-9cac-e0f779598741","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]}},"id":"401e4997-11fb-46ed-b1a4-084c4e40339d","type":"ColumnDataSource"}],"root_ids":["083fedca-6169-4fd6-a566-dfebc29f2cb0"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e4f56e66-f5fd-40a1-b87a-41e1e44e99df","elementid":"72eb4475-d0f1-41ec-81a1-2bf8ecad2187","modelid":"083fedca-6169-4fd6-a566-dfebc29f2cb0"}];
                
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
