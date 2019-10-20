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
      };var element = document.getElementById("a8eab910-7ff7-4029-92a4-cca7012db4c5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a8eab910-7ff7-4029-92a4-cca7012db4c5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"60384417-6ae6-417d-b9c1-40e8b10dd85b":{"roots":{"references":[{"attributes":{"below":[{"id":"2ead7189-e290-4cca-8252-1ac3a7e5ff20","type":"CategoricalAxis"}],"left":[{"id":"d07f1667-2171-46c8-9e0a-2fafe88278ef","type":"CategoricalAxis"}],"renderers":[{"id":"2ead7189-e290-4cca-8252-1ac3a7e5ff20","type":"CategoricalAxis"},{"id":"e11619b3-546e-4e0e-90e8-a2e5759403e2","type":"Grid"},{"id":"d07f1667-2171-46c8-9e0a-2fafe88278ef","type":"CategoricalAxis"},{"id":"cc72bed8-6b74-4174-92ab-210945423020","type":"Grid"},{"id":"3952929f-c313-4b58-b41f-01d8496bb61c","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"9ec86968-1204-4c98-b85b-b26fc9a75b3d","type":"Title"},"toolbar":{"id":"2c9159a6-f9f0-4384-b78e-b7edefda2841","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"715d7c1a-f29e-4378-980e-d1703b341635","type":"FactorRange"},"x_scale":{"id":"5cd67189-16f6-40e1-9275-a47a1ac04f53","type":"CategoricalScale"},"y_range":{"id":"84d1ccd2-680b-4ff0-a8f1-d3197322c14e","type":"FactorRange"},"y_scale":{"id":"5b2ea0f6-9576-49b7-8493-cd1230cddfca","type":"CategoricalScale"}},"id":"2c9556da-1ea0-4b2c-b5d8-a0932f0e53ee","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"705c983b-94bb-4d2a-b9bf-7cbf940901c2","type":"Segment"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8994aa62-af8c-41b3-a22e-b19a4100d0d1","type":"HoverTool"}]},"id":"2c9159a6-f9f0-4384-b78e-b7edefda2841","type":"Toolbar"},{"attributes":{},"id":"5b2ea0f6-9576-49b7-8493-cd1230cddfca","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"bbffa0c5-6af8-40db-9027-98f9885c6936","type":"Circle"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"9ec86968-1204-4c98-b85b-b26fc9a75b3d","type":"Title"},{"attributes":{},"id":"64644a1c-2a93-4808-8133-b52366f83618","type":"CategoricalTicker"},{"attributes":{},"id":"bea2bf91-98a1-4097-a1c8-c170639ceb6f","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"7148cbad-9291-4a60-a2d4-752f0646021f","type":"Segment"},{"attributes":{},"id":"45e7de96-5c3f-4cec-839a-c2d6cd007999","type":"Selection"},{"attributes":{"source":{"id":"26c767ef-1fe5-4a8c-b4b4-719ac55949f6","type":"ColumnDataSource"}},"id":"131f48ab-e93e-49b3-84f8-2f1640349362","type":"CDSView"},{"attributes":{"children":[{"id":"2c9556da-1ea0-4b2c-b5d8-a0932f0e53ee","subtype":"Figure","type":"Plot"},{"id":"e11bffe5-9baf-4b4b-bf28-4588fa2fa54a","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"72f7d229-c6c7-4bdd-84e6-3167fc227517","type":"Row"},{"attributes":{"callback":null,"renderers":"auto"},"id":"8994aa62-af8c-41b3-a22e-b19a4100d0d1","type":"HoverTool"},{"attributes":{"callback":null,"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]},"selected":{"id":"45e7de96-5c3f-4cec-839a-c2d6cd007999","type":"Selection"},"selection_policy":{"id":"9e484cb6-fee3-4c24-8dd7-1002c5d75589","type":"UnionRenderers"}},"id":"26c767ef-1fe5-4a8c-b4b4-719ac55949f6","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e23fc94-9c4c-4880-b42f-9de86a3ee5a6","type":"Rect"},{"attributes":{"source":{"id":"6f3058be-9676-4798-ad0e-ee6c75e41955","type":"ColumnDataSource"}},"id":"0038426c-2bb6-43dc-9058-cda59150d60e","type":"CDSView"},{"attributes":{},"id":"6b618332-327c-4b79-9448-68987b860925","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"715d7c1a-f29e-4378-980e-d1703b341635","type":"FactorRange"},{"attributes":{},"id":"5cd67189-16f6-40e1-9275-a47a1ac04f53","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"95048a9d-79f6-4bd1-ac66-7fd80d88511e","type":"BasicTickFormatter"},"plot":{"id":"e11bffe5-9baf-4b4b-bf28-4588fa2fa54a","subtype":"Figure","type":"Plot"},"ticker":{"id":"bea2bf91-98a1-4097-a1c8-c170639ceb6f","type":"BasicTicker"}},"id":"ae1f9e58-6e09-48f5-a454-a17004c7dd55","type":"LinearAxis"},{"attributes":{},"id":"b5e5e563-a87b-471e-bd0a-2eb2146900b9","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1995fb9f-80b1-4e90-828a-67c11e81c506","type":"Toolbar"},{"attributes":{"source":{"id":"dcc1b830-4aa8-42d6-8fa5-7b7aec12bddb","type":"ColumnDataSource"}},"id":"3ec7bc67-0765-4d47-b929-808c774d59c5","type":"CDSView"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"93d00744-37c1-48cc-858e-ffb13521c499","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"e11bffe5-9baf-4b4b-bf28-4588fa2fa54a","subtype":"Figure","type":"Plot"},"ticker":{"id":"8de0564c-c30a-4767-8131-8bbee037b208","type":"CategoricalTicker"}},"id":"c4bcb6a0-2ac7-4d08-b49b-4c535b6b73be","type":"Grid"},{"attributes":{},"id":"04ada1d1-6451-4656-b822-22e04b5a8e24","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]},"selected":{"id":"651cdafa-7aa8-405c-9b4e-f014ae50cce4","type":"Selection"},"selection_policy":{"id":"04ada1d1-6451-4656-b822-22e04b5a8e24","type":"UnionRenderers"}},"id":"dcc1b830-4aa8-42d6-8fa5-7b7aec12bddb","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"ca458764-0ea3-46f9-a793-599cc070efeb","type":"CategoricalTickFormatter"},"plot":{"id":"2c9556da-1ea0-4b2c-b5d8-a0932f0e53ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"64644a1c-2a93-4808-8133-b52366f83618","type":"CategoricalTicker"}},"id":"2ead7189-e290-4cca-8252-1ac3a7e5ff20","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":100},"id":"feac143b-a357-462d-9336-bd2a55d36ce2","type":"Range1d"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"c6f15433-8fd0-4265-9280-13f622005cff","type":"FactorRange"},{"attributes":{},"id":"8de0564c-c30a-4767-8131-8bbee037b208","type":"CategoricalTicker"},{"attributes":{},"id":"9e484cb6-fee3-4c24-8dd7-1002c5d75589","type":"UnionRenderers"},{"attributes":{},"id":"4006fbec-4532-4641-9ab9-c1eada9f6c26","type":"CategoricalTickFormatter"},{"attributes":{},"id":"61c6ed32-4523-4382-bc68-bb432e5cf995","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"ae1f9e58-6e09-48f5-a454-a17004c7dd55","type":"LinearAxis"}],"left":[{"id":"17120201-fe4c-4fb5-a9ed-657d4096400b","type":"CategoricalAxis"}],"renderers":[{"id":"ae1f9e58-6e09-48f5-a454-a17004c7dd55","type":"LinearAxis"},{"id":"cc002faa-2032-40ca-b5b1-7931135b4f00","type":"Grid"},{"id":"17120201-fe4c-4fb5-a9ed-657d4096400b","type":"CategoricalAxis"},{"id":"c4bcb6a0-2ac7-4d08-b49b-4c535b6b73be","type":"Grid"},{"id":"1a994918-3a7e-479d-abdb-cd2498d210e2","type":"GlyphRenderer"},{"id":"916b1770-91b1-4206-ba30-e1474426bfcc","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"efe471ed-5823-442c-b348-d38bd04e3506","type":"Title"},"toolbar":{"id":"1995fb9f-80b1-4e90-828a-67c11e81c506","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"feac143b-a357-462d-9336-bd2a55d36ce2","type":"Range1d"},"x_scale":{"id":"c83b91c0-b909-49b0-9ee7-a155acec6b07","type":"LinearScale"},"y_range":{"id":"c6f15433-8fd0-4265-9280-13f622005cff","type":"FactorRange"},"y_scale":{"id":"6d4195f0-293d-489b-80f0-cc7f129185ce","type":"CategoricalScale"}},"id":"e11bffe5-9baf-4b4b-bf28-4588fa2fa54a","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"efe471ed-5823-442c-b348-d38bd04e3506","type":"Title"},{"attributes":{"data_source":{"id":"26c767ef-1fe5-4a8c-b4b4-719ac55949f6","type":"ColumnDataSource"},"glyph":{"id":"705c983b-94bb-4d2a-b9bf-7cbf940901c2","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7148cbad-9291-4a60-a2d4-752f0646021f","type":"Segment"},"selection_glyph":null,"view":{"id":"131f48ab-e93e-49b3-84f8-2f1640349362","type":"CDSView"}},"id":"1a994918-3a7e-479d-abdb-cd2498d210e2","type":"GlyphRenderer"},{"attributes":{},"id":"95048a9d-79f6-4bd1-ac66-7fd80d88511e","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"84d1ccd2-680b-4ff0-a8f1-d3197322c14e","type":"FactorRange"},{"attributes":{"data_source":{"id":"dcc1b830-4aa8-42d6-8fa5-7b7aec12bddb","type":"ColumnDataSource"},"glyph":{"id":"9e23fc94-9c4c-4880-b42f-9de86a3ee5a6","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0652b3ea-f7c2-492e-8b4e-7aadb769d79a","type":"Rect"},"selection_glyph":null,"view":{"id":"3ec7bc67-0765-4d47-b929-808c774d59c5","type":"CDSView"}},"id":"3952929f-c313-4b58-b41f-01d8496bb61c","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"4006fbec-4532-4641-9ab9-c1eada9f6c26","type":"CategoricalTickFormatter"},"plot":{"id":"2c9556da-1ea0-4b2c-b5d8-a0932f0e53ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"61c6ed32-4523-4382-bc68-bb432e5cf995","type":"CategoricalTicker"}},"id":"d07f1667-2171-46c8-9e0a-2fafe88278ef","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"e11bffe5-9baf-4b4b-bf28-4588fa2fa54a","subtype":"Figure","type":"Plot"},"ticker":{"id":"bea2bf91-98a1-4097-a1c8-c170639ceb6f","type":"BasicTicker"}},"id":"cc002faa-2032-40ca-b5b1-7931135b4f00","type":"Grid"},{"attributes":{"formatter":{"id":"6b618332-327c-4b79-9448-68987b860925","type":"CategoricalTickFormatter"},"plot":{"id":"e11bffe5-9baf-4b4b-bf28-4588fa2fa54a","subtype":"Figure","type":"Plot"},"ticker":{"id":"8de0564c-c30a-4767-8131-8bbee037b208","type":"CategoricalTicker"}},"id":"17120201-fe4c-4fb5-a9ed-657d4096400b","type":"CategoricalAxis"},{"attributes":{},"id":"651cdafa-7aa8-405c-9b4e-f014ae50cce4","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"b5e5e563-a87b-471e-bd0a-2eb2146900b9","type":"Selection"},"selection_policy":{"id":"59f03c7d-f5a6-43d4-a117-e85b10bc3dd6","type":"UnionRenderers"}},"id":"6f3058be-9676-4798-ad0e-ee6c75e41955","type":"ColumnDataSource"},{"attributes":{},"id":"59f03c7d-f5a6-43d4-a117-e85b10bc3dd6","type":"UnionRenderers"},{"attributes":{},"id":"c83b91c0-b909-49b0-9ee7-a155acec6b07","type":"LinearScale"},{"attributes":{"data_source":{"id":"6f3058be-9676-4798-ad0e-ee6c75e41955","type":"ColumnDataSource"},"glyph":{"id":"93d00744-37c1-48cc-858e-ffb13521c499","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bbffa0c5-6af8-40db-9027-98f9885c6936","type":"Circle"},"selection_glyph":null,"view":{"id":"0038426c-2bb6-43dc-9058-cda59150d60e","type":"CDSView"}},"id":"916b1770-91b1-4206-ba30-e1474426bfcc","type":"GlyphRenderer"},{"attributes":{},"id":"ca458764-0ea3-46f9-a793-599cc070efeb","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"2c9556da-1ea0-4b2c-b5d8-a0932f0e53ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"64644a1c-2a93-4808-8133-b52366f83618","type":"CategoricalTicker"}},"id":"e11619b3-546e-4e0e-90e8-a2e5759403e2","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"0652b3ea-f7c2-492e-8b4e-7aadb769d79a","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"2c9556da-1ea0-4b2c-b5d8-a0932f0e53ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"61c6ed32-4523-4382-bc68-bb432e5cf995","type":"CategoricalTicker"}},"id":"cc72bed8-6b74-4174-92ab-210945423020","type":"Grid"},{"attributes":{},"id":"6d4195f0-293d-489b-80f0-cc7f129185ce","type":"CategoricalScale"}],"root_ids":["72f7d229-c6c7-4bdd-84e6-3167fc227517"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"60384417-6ae6-417d-b9c1-40e8b10dd85b","roots":{"72f7d229-c6c7-4bdd-84e6-3167fc227517":"a8eab910-7ff7-4029-92a4-cca7012db4c5"}}];
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