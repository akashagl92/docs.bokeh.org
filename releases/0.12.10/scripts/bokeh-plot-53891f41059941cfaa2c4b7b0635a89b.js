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
      };var element = document.getElementById("fb21b463-74bd-4c92-a50f-3a91de34b160");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fb21b463-74bd-4c92-a50f-3a91de34b160' but no matching script tag was found. ")
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
                    var docs_json = {"c53d83b8-5164-45a2-ac6f-e2b2b1a7cbae":{"roots":{"references":[{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"38fa0d84-0c7c-44cd-aa4c-49d0e290b2f5","type":"Title"},{"attributes":{"source":{"id":"50685e77-1860-4a94-a715-362777332cde","type":"ColumnDataSource"}},"id":"d8083964-29e6-491f-b842-07740347100e","type":"CDSView"},{"attributes":{"below":[{"id":"4cffea87-c3a4-4abd-9bcf-3e9e01e85229","type":"CategoricalAxis"}],"left":[{"id":"939d10d6-084d-406f-84a4-3fc324433ebc","type":"CategoricalAxis"}],"renderers":[{"id":"4cffea87-c3a4-4abd-9bcf-3e9e01e85229","type":"CategoricalAxis"},{"id":"4883ed85-d90f-4c04-99f1-7bc68ce5ce41","type":"Grid"},{"id":"939d10d6-084d-406f-84a4-3fc324433ebc","type":"CategoricalAxis"},{"id":"3ea46d55-62e7-4bf4-953e-f362c0b4c8bd","type":"Grid"},{"id":"e37f7954-e4c2-4a95-aaa9-6975ad68999c","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"38fa0d84-0c7c-44cd-aa4c-49d0e290b2f5","type":"Title"},"toolbar":{"id":"0a949f2d-5cf9-4b57-98e4-56eff325431d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d723f48c-59a4-44f8-9865-880ddd962b6e","type":"FactorRange"},"x_scale":{"id":"967a43d6-b339-486c-83ec-665cb85d6dd7","type":"CategoricalScale"},"y_range":{"id":"0bc3caa8-b6be-4570-b1aa-1ca5f251c116","type":"FactorRange"},"y_scale":{"id":"31387188-fd80-425b-bb6c-954bef8ccc80","type":"CategoricalScale"}},"id":"a5b8184c-aa0a-4c61-98c1-c8cea201911b","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"50685e77-1860-4a94-a715-362777332cde","type":"ColumnDataSource"},"glyph":{"id":"c65b49c8-4bcc-4604-96e9-3730af997bef","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ce6562a9-96de-4d3c-ad93-0623ee94780d","type":"Circle"},"selection_glyph":null,"view":{"id":"d8083964-29e6-491f-b842-07740347100e","type":"CDSView"}},"id":"f8b365f7-789a-4a42-b306-a65f0842fa93","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"2da0e36f-ee54-47a8-aa1a-2be7f63d4434","type":"BasicTickFormatter"},"plot":{"id":"3803a4b5-eac3-49b9-b340-37c551b60419","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee79771d-fd94-4e18-94c9-26d248d5bd12","type":"BasicTicker"}},"id":"2b9c2e40-7ef4-4161-a0a9-205e4ce267af","type":"LinearAxis"},{"attributes":{"source":{"id":"7089ca56-b64c-4b60-9b59-0f40621867c7","type":"ColumnDataSource"}},"id":"9d08c285-e9c8-4386-acc5-afe074c8b0b3","type":"CDSView"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"d723f48c-59a4-44f8-9865-880ddd962b6e","type":"FactorRange"},{"attributes":{},"id":"ee56a8a9-03e0-48fe-b1b2-22c8ffaada9b","type":"LinearScale"},{"attributes":{"source":{"id":"8fb3bfeb-148a-4393-9eac-118dd5c29566","type":"ColumnDataSource"}},"id":"34b328d1-e592-46e6-9012-2451a9e32748","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"055b9917-be98-4992-8499-28f80d38f945","type":"HoverTool"}]},"id":"0a949f2d-5cf9-4b57-98e4-56eff325431d","type":"Toolbar"},{"attributes":{"callback":null,"end":100},"id":"5edfb757-db56-4cca-bc01-51a401b8f2b4","type":"Range1d"},{"attributes":{"formatter":{"id":"4285a1e0-54ca-4539-8162-789917b38be3","type":"CategoricalTickFormatter"},"plot":{"id":"3803a4b5-eac3-49b9-b340-37c551b60419","subtype":"Figure","type":"Plot"},"ticker":{"id":"81a6ba68-be86-43c7-adf9-4b91dc341b90","type":"CategoricalTicker"}},"id":"ecdcb3b9-cf6f-4d94-82fc-dc64231eb53d","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"b73d8934-6d7a-4a64-8fe1-56099e896346","type":"Title"},{"attributes":{},"id":"6bb5bf34-82ee-4696-9e81-56919ee71310","type":"CategoricalScale"},{"attributes":{},"id":"baf54282-1f8e-4be9-b8b4-d6bb8877a040","type":"CategoricalTickFormatter"},{"attributes":{},"id":"069ad1a5-ce5d-4d9c-933a-cea9c7a7bab1","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"1f610d99-7f48-4856-a8dd-f5b6746a9146","type":"Rect"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"0bc3caa8-b6be-4570-b1aa-1ca5f251c116","type":"FactorRange"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"527cb044-5498-4f99-8a94-35d29d9856ba","type":"Segment"},{"attributes":{},"id":"9bc8f3ba-1d3b-490f-8a4b-c20d3a7b0692","type":"CategoricalTickFormatter"},{"attributes":{},"id":"ee79771d-fd94-4e18-94c9-26d248d5bd12","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"a5b8184c-aa0a-4c61-98c1-c8cea201911b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f870f03-6dd3-4bb7-a0d6-eac984fe702d","type":"CategoricalTicker"}},"id":"3ea46d55-62e7-4bf4-953e-f362c0b4c8bd","type":"Grid"},{"attributes":{"children":[{"id":"a5b8184c-aa0a-4c61-98c1-c8cea201911b","subtype":"Figure","type":"Plot"},{"id":"3803a4b5-eac3-49b9-b340-37c551b60419","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"b4a77a60-8c14-4a26-a5ff-ffb6fcfc5613","type":"Row"},{"attributes":{},"id":"967a43d6-b339-486c-83ec-665cb85d6dd7","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"8fb3bfeb-148a-4393-9eac-118dd5c29566","type":"ColumnDataSource"},{"attributes":{},"id":"81a6ba68-be86-43c7-adf9-4b91dc341b90","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"2b9c2e40-7ef4-4161-a0a9-205e4ce267af","type":"LinearAxis"}],"left":[{"id":"ecdcb3b9-cf6f-4d94-82fc-dc64231eb53d","type":"CategoricalAxis"}],"renderers":[{"id":"2b9c2e40-7ef4-4161-a0a9-205e4ce267af","type":"LinearAxis"},{"id":"7514b0d8-92cb-4fa4-990c-35570cae5659","type":"Grid"},{"id":"ecdcb3b9-cf6f-4d94-82fc-dc64231eb53d","type":"CategoricalAxis"},{"id":"983a2c6d-0049-4089-8f93-6e9c73d952cc","type":"Grid"},{"id":"4df99e6b-2c11-427f-b3c3-6b888a1d2c44","type":"GlyphRenderer"},{"id":"f8b365f7-789a-4a42-b306-a65f0842fa93","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"b73d8934-6d7a-4a64-8fe1-56099e896346","type":"Title"},"toolbar":{"id":"39be3442-253e-4fa2-b279-445ee8d3017f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5edfb757-db56-4cca-bc01-51a401b8f2b4","type":"Range1d"},"x_scale":{"id":"ee56a8a9-03e0-48fe-b1b2-22c8ffaada9b","type":"LinearScale"},"y_range":{"id":"d754692d-1761-4c25-aef8-051065454b2a","type":"FactorRange"},"y_scale":{"id":"6bb5bf34-82ee-4696-9e81-56919ee71310","type":"CategoricalScale"}},"id":"3803a4b5-eac3-49b9-b340-37c551b60419","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2da0e36f-ee54-47a8-aa1a-2be7f63d4434","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3803a4b5-eac3-49b9-b340-37c551b60419","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee79771d-fd94-4e18-94c9-26d248d5bd12","type":"BasicTicker"}},"id":"7514b0d8-92cb-4fa4-990c-35570cae5659","type":"Grid"},{"attributes":{},"id":"31387188-fd80-425b-bb6c-954bef8ccc80","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"8fb3bfeb-148a-4393-9eac-118dd5c29566","type":"ColumnDataSource"},"glyph":{"id":"784a8d37-8f2c-4f28-919b-5b7d53c92db0","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"527cb044-5498-4f99-8a94-35d29d9856ba","type":"Segment"},"selection_glyph":null,"view":{"id":"34b328d1-e592-46e6-9012-2451a9e32748","type":"CDSView"}},"id":"4df99e6b-2c11-427f-b3c3-6b888a1d2c44","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"055b9917-be98-4992-8499-28f80d38f945","type":"HoverTool"},{"attributes":{"formatter":{"id":"9bc8f3ba-1d3b-490f-8a4b-c20d3a7b0692","type":"CategoricalTickFormatter"},"plot":{"id":"a5b8184c-aa0a-4c61-98c1-c8cea201911b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f870f03-6dd3-4bb7-a0d6-eac984fe702d","type":"CategoricalTicker"}},"id":"939d10d6-084d-406f-84a4-3fc324433ebc","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"50685e77-1860-4a94-a715-362777332cde","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7089ca56-b64c-4b60-9b59-0f40621867c7","type":"ColumnDataSource"},"glyph":{"id":"c42e31d7-701d-496c-b385-78a6b038a37a","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1f610d99-7f48-4856-a8dd-f5b6746a9146","type":"Rect"},"selection_glyph":null,"view":{"id":"9d08c285-e9c8-4386-acc5-afe074c8b0b3","type":"CDSView"}},"id":"e37f7954-e4c2-4a95-aaa9-6975ad68999c","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"baf54282-1f8e-4be9-b8b4-d6bb8877a040","type":"CategoricalTickFormatter"},"plot":{"id":"a5b8184c-aa0a-4c61-98c1-c8cea201911b","subtype":"Figure","type":"Plot"},"ticker":{"id":"069ad1a5-ce5d-4d9c-933a-cea9c7a7bab1","type":"CategoricalTicker"}},"id":"4cffea87-c3a4-4abd-9bcf-3e9e01e85229","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"d754692d-1761-4c25-aef8-051065454b2a","type":"FactorRange"},{"attributes":{"plot":{"id":"a5b8184c-aa0a-4c61-98c1-c8cea201911b","subtype":"Figure","type":"Plot"},"ticker":{"id":"069ad1a5-ce5d-4d9c-933a-cea9c7a7bab1","type":"CategoricalTicker"}},"id":"4883ed85-d90f-4c04-99f1-7bc68ce5ce41","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"39be3442-253e-4fa2-b279-445ee8d3017f","type":"Toolbar"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"784a8d37-8f2c-4f28-919b-5b7d53c92db0","type":"Segment"},{"attributes":{"dimension":1,"plot":{"id":"3803a4b5-eac3-49b9-b340-37c551b60419","subtype":"Figure","type":"Plot"},"ticker":{"id":"81a6ba68-be86-43c7-adf9-4b91dc341b90","type":"CategoricalTicker"}},"id":"983a2c6d-0049-4089-8f93-6e9c73d952cc","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce6562a9-96de-4d3c-ad93-0623ee94780d","type":"Circle"},{"attributes":{},"id":"4285a1e0-54ca-4539-8162-789917b38be3","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]}},"id":"7089ca56-b64c-4b60-9b59-0f40621867c7","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"c42e31d7-701d-496c-b385-78a6b038a37a","type":"Rect"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"c65b49c8-4bcc-4604-96e9-3730af997bef","type":"Circle"},{"attributes":{},"id":"3f870f03-6dd3-4bb7-a0d6-eac984fe702d","type":"CategoricalTicker"}],"root_ids":["b4a77a60-8c14-4a26-a5ff-ffb6fcfc5613"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"c53d83b8-5164-45a2-ac6f-e2b2b1a7cbae","elementid":"fb21b463-74bd-4c92-a50f-3a91de34b160","modelid":"b4a77a60-8c14-4a26-a5ff-ffb6fcfc5613"}];
                
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
