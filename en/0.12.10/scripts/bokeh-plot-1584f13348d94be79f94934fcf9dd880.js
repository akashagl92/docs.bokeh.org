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
      };var element = document.getElementById("93aee483-494e-4db6-beb7-e43fbbc1e46c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '93aee483-494e-4db6-beb7-e43fbbc1e46c' but no matching script tag was found. ")
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
                    var docs_json = {"8a418e51-87eb-4c59-8b72-cf5321d3f569":{"roots":{"references":[{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"a33ad8fe-fd24-4f92-9588-424ffe4598ce","type":"Title"},{"attributes":{},"id":"a3e8552a-65bc-4610-918d-1c5554e3a525","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"c3e1a283-b488-4e10-bd84-9293a7df9858","type":"BasicTickFormatter"},"plot":{"id":"fef14f77-b260-4df2-b76e-a371fe45e7f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"66839bdf-ef2b-461c-bd6d-f52685b3ea41","type":"BasicTicker"}},"id":"6e5461d0-2ad6-4bc5-b57a-7ca8482dc2b0","type":"LinearAxis"},{"attributes":{"formatter":{"id":"b8fa41b8-491a-4f0c-8385-5ec38338e6a3","type":"CategoricalTickFormatter"},"plot":{"id":"fef14f77-b260-4df2-b76e-a371fe45e7f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"d05c4e58-59fc-4e62-ad95-cd846745a687","type":"CategoricalTicker"}},"id":"ef31b2b8-035f-4f67-9d3d-bcc9cd2efc6f","type":"CategoricalAxis"},{"attributes":{"dimension":1,"plot":{"id":"fef14f77-b260-4df2-b76e-a371fe45e7f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"66839bdf-ef2b-461c-bd6d-f52685b3ea41","type":"BasicTicker"}},"id":"11ad4c76-dc0e-47b5-9a02-a5c5550febb2","type":"Grid"},{"attributes":{"below":[{"id":"ef31b2b8-035f-4f67-9d3d-bcc9cd2efc6f","type":"CategoricalAxis"}],"left":[{"id":"6e5461d0-2ad6-4bc5-b57a-7ca8482dc2b0","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"ef31b2b8-035f-4f67-9d3d-bcc9cd2efc6f","type":"CategoricalAxis"},{"id":"ddfa1f30-f0f8-4912-8b4b-0ed90d099f55","type":"Grid"},{"id":"6e5461d0-2ad6-4bc5-b57a-7ca8482dc2b0","type":"LinearAxis"},{"id":"11ad4c76-dc0e-47b5-9a02-a5c5550febb2","type":"Grid"},{"id":"dc045fad-8a0e-4c13-8160-8ca4e2928864","type":"Legend"},{"id":"a5673f26-00b6-42ac-adf8-c8bb23b3ef51","type":"GlyphRenderer"}],"title":{"id":"a33ad8fe-fd24-4f92-9588-424ffe4598ce","type":"Title"},"toolbar":{"id":"89b1d3dc-e17b-4b65-91d3-9a934c464306","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d1dbcd76-c6e6-4200-8f44-020c2e5b6b4f","type":"FactorRange"},"x_scale":{"id":"a3e8552a-65bc-4610-918d-1c5554e3a525","type":"CategoricalScale"},"y_range":{"id":"a189cab6-6631-4134-a142-735f1e0de391","type":"Range1d"},"y_scale":{"id":"273f7bad-4119-4172-aa60-1d342445cab3","type":"LinearScale"}},"id":"fef14f77-b260-4df2-b76e-a371fe45e7f9","subtype":"Figure","type":"Plot"},{"attributes":{"items":[{"id":"cf52ea4c-88e5-4ce7-baef-860d5adc874e","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"fef14f77-b260-4df2-b76e-a371fe45e7f9","subtype":"Figure","type":"Plot"}},"id":"dc045fad-8a0e-4c13-8160-8ca4e2928864","type":"Legend"},{"attributes":{"callback":null,"column_names":["fruits","counts","color"],"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"a61e5c13-ffe2-418b-a88a-54f2153bdcf9","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a61e5c13-ffe2-418b-a88a-54f2153bdcf9","type":"ColumnDataSource"},"glyph":{"id":"6166e7b1-f194-4c38-b439-704ed284a1bb","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ec342dbf-a60e-45a9-8495-93035c93d2af","type":"VBar"},"selection_glyph":null,"view":{"id":"77dd4a7a-62c3-43dc-975f-8ca66fc7e6e9","type":"CDSView"}},"id":"a5673f26-00b6-42ac-adf8-c8bb23b3ef51","type":"GlyphRenderer"},{"attributes":{},"id":"66839bdf-ef2b-461c-bd6d-f52685b3ea41","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"d1dbcd76-c6e6-4200-8f44-020c2e5b6b4f","type":"FactorRange"},{"attributes":{"callback":null,"end":9},"id":"a189cab6-6631-4134-a142-735f1e0de391","type":"Range1d"},{"attributes":{"source":{"id":"a61e5c13-ffe2-418b-a88a-54f2153bdcf9","type":"ColumnDataSource"}},"id":"77dd4a7a-62c3-43dc-975f-8ca66fc7e6e9","type":"CDSView"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"a5673f26-00b6-42ac-adf8-c8bb23b3ef51","type":"GlyphRenderer"}]},"id":"cf52ea4c-88e5-4ce7-baef-860d5adc874e","type":"LegendItem"},{"attributes":{},"id":"b8fa41b8-491a-4f0c-8385-5ec38338e6a3","type":"CategoricalTickFormatter"},{"attributes":{},"id":"273f7bad-4119-4172-aa60-1d342445cab3","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ec342dbf-a60e-45a9-8495-93035c93d2af","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"fef14f77-b260-4df2-b76e-a371fe45e7f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"d05c4e58-59fc-4e62-ad95-cd846745a687","type":"CategoricalTicker"}},"id":"ddfa1f30-f0f8-4912-8b4b-0ed90d099f55","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"89b1d3dc-e17b-4b65-91d3-9a934c464306","type":"Toolbar"},{"attributes":{},"id":"c3e1a283-b488-4e10-bd84-9293a7df9858","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"6166e7b1-f194-4c38-b439-704ed284a1bb","type":"VBar"},{"attributes":{},"id":"d05c4e58-59fc-4e62-ad95-cd846745a687","type":"CategoricalTicker"}],"root_ids":["fef14f77-b260-4df2-b76e-a371fe45e7f9"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"8a418e51-87eb-4c59-8b72-cf5321d3f569","elementid":"93aee483-494e-4db6-beb7-e43fbbc1e46c","modelid":"fef14f77-b260-4df2-b76e-a371fe45e7f9"}];
                
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
