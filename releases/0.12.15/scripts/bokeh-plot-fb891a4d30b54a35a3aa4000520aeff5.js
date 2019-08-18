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
      };var element = document.getElementById("925f14f1-d378-43e5-8297-3f881939f4f0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '925f14f1-d378-43e5-8297-3f881939f4f0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                    
                  var docs_json = '{"2597d38e-da99-4ef0-b032-0378e1618815":{"roots":{"references":[{"attributes":{},"id":"03e68518-1200-4d9d-9102-b09abe54c727","type":"LinearScale"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"1825ce44-b2ed-40d2-84b2-919e5d42824b","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"bf8cf40d-0346-40ab-adc8-810801de89bb","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"cbc611b3-924a-4a92-9d35-e8656083a5e4","type":"VBar"},{"attributes":{"callback":null,"start":0},"id":"8a853791-e4b0-4fd5-b853-0ae51b5fa812","type":"DataRange1d"},{"attributes":{"formatter":{"id":"0e42d311-de05-4373-a628-8f3cfaf7b1d1","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"a68a2a57-0b0d-47bd-ac6d-ec1fd4bdf9a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"55754ee7-849d-4647-9a5e-43b2f8e4e847","type":"CategoricalTicker"}},"id":"b141895f-7b09-47f9-bb42-212150d215db","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"b1b4dc05-a8a4-4a15-8afe-51f70785b0b4","type":"ColumnDataSource"},"glyph":{"id":"bf8cf40d-0346-40ab-adc8-810801de89bb","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cbc611b3-924a-4a92-9d35-e8656083a5e4","type":"VBar"},"selection_glyph":null,"view":{"id":"5c7f373e-71e0-4818-91da-7009408276b4","type":"CDSView"}},"id":"0f8b425c-ae2e-424d-9f64-354fa931d4ba","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"b7b88713-30fe-470c-abaa-dce7621d2f65","type":"Title"},{"attributes":{"source":{"id":"b1b4dc05-a8a4-4a15-8afe-51f70785b0b4","type":"ColumnDataSource"}},"id":"5c7f373e-71e0-4818-91da-7009408276b4","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"a68a2a57-0b0d-47bd-ac6d-ec1fd4bdf9a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"55754ee7-849d-4647-9a5e-43b2f8e4e847","type":"CategoricalTicker"}},"id":"a4f6a48f-d22a-4b3c-9f52-c1bb12e4ca95","type":"Grid"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"1825ce44-b2ed-40d2-84b2-919e5d42824b","type":"CategoricalColorMapper"},{"attributes":{},"id":"86351844-0d08-4363-a588-fc4241a833a7","type":"BasicTickFormatter"},{"attributes":{},"id":"0e42d311-de05-4373-a628-8f3cfaf7b1d1","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"272c6e07-b5b2-4616-b31d-b128b0f0ccec","type":"FactorRange"},{"attributes":{"below":[{"id":"b141895f-7b09-47f9-bb42-212150d215db","type":"CategoricalAxis"}],"left":[{"id":"26a17535-cd85-4b81-9041-533955cd576b","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"b141895f-7b09-47f9-bb42-212150d215db","type":"CategoricalAxis"},{"id":"a4f6a48f-d22a-4b3c-9f52-c1bb12e4ca95","type":"Grid"},{"id":"26a17535-cd85-4b81-9041-533955cd576b","type":"LinearAxis"},{"id":"ce67a64d-8d25-41a6-a4d7-9dbdbc1132da","type":"Grid"},{"id":"0f8b425c-ae2e-424d-9f64-354fa931d4ba","type":"GlyphRenderer"}],"title":{"id":"b7b88713-30fe-470c-abaa-dce7621d2f65","type":"Title"},"toolbar":{"id":"48e125e4-af03-4990-aefb-bb5d23a3d325","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"272c6e07-b5b2-4616-b31d-b128b0f0ccec","type":"FactorRange"},"x_scale":{"id":"81044efc-22f1-4f45-bdca-d83710c738ef","type":"CategoricalScale"},"y_range":{"id":"8a853791-e4b0-4fd5-b853-0ae51b5fa812","type":"DataRange1d"},"y_scale":{"id":"03e68518-1200-4d9d-9102-b09abe54c727","type":"LinearScale"}},"id":"a68a2a57-0b0d-47bd-ac6d-ec1fd4bdf9a4","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"48e125e4-af03-4990-aefb-bb5d23a3d325","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]},"selected":null,"selection_policy":null},"id":"b1b4dc05-a8a4-4a15-8afe-51f70785b0b4","type":"ColumnDataSource"},{"attributes":{},"id":"55754ee7-849d-4647-9a5e-43b2f8e4e847","type":"CategoricalTicker"},{"attributes":{},"id":"81044efc-22f1-4f45-bdca-d83710c738ef","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"86351844-0d08-4363-a588-fc4241a833a7","type":"BasicTickFormatter"},"plot":{"id":"a68a2a57-0b0d-47bd-ac6d-ec1fd4bdf9a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc0991cb-2267-4b65-808d-87e6544fba00","type":"BasicTicker"}},"id":"26a17535-cd85-4b81-9041-533955cd576b","type":"LinearAxis"},{"attributes":{},"id":"bc0991cb-2267-4b65-808d-87e6544fba00","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"a68a2a57-0b0d-47bd-ac6d-ec1fd4bdf9a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc0991cb-2267-4b65-808d-87e6544fba00","type":"BasicTicker"}},"id":"ce67a64d-8d25-41a6-a4d7-9dbdbc1132da","type":"Grid"}],"root_ids":["a68a2a57-0b0d-47bd-ac6d-ec1fd4bdf9a4"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"2597d38e-da99-4ef0-b032-0378e1618815","elementid":"925f14f1-d378-43e5-8297-3f881939f4f0","modelid":"a68a2a57-0b0d-47bd-ac6d-ec1fd4bdf9a4"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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