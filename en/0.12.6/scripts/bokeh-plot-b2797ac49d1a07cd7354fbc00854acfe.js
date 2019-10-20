(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("cb8ebd72-0b91-4f28-bf53-8eef0fd98b15");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cb8ebd72-0b91-4f28-bf53-8eef0fd98b15' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"512d9f09-9e99-408c-8e89-8ec88727f5bd":{"roots":{"references":[{"attributes":{},"id":"ed17f4bc-573d-42c9-a24c-49a1de3d300e","type":"BasicTickFormatter"},{"attributes":{},"id":"6307bf96-9b16-4c10-96c5-293830cb8d57","type":"LinearScale"},{"attributes":{},"id":"ccd0c594-abbf-4a66-87d1-a0bc57c1dabc","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"95627455-5518-4c94-911b-97de6ff1b64d","type":"Circle"},{"attributes":{"callback":null},"id":"77051750-e703-4d0c-8cf2-f5bfd759990b","type":"DataRange1d"},{"attributes":{"data_source":{"id":"0732964f-998d-4335-be43-42c9cca38e83","type":"ColumnDataSource"},"glyph":{"id":"1fd0bb17-3cf9-4656-95a7-9a99bad1b2e7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95627455-5518-4c94-911b-97de6ff1b64d","type":"Circle"},"selection_glyph":null},"id":"454cf97e-4b79-473c-b44f-d54f4a56ed69","type":"GlyphRenderer"},{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"6f2d1c97-0a2d-46f9-a794-31d772259dc9","type":"OpenURL"},{"attributes":{"dimension":1,"plot":{"id":"db87ecc2-6a14-4918-8652-950dbffe9177","subtype":"Figure","type":"Plot"},"ticker":{"id":"ccd0c594-abbf-4a66-87d1-a0bc57c1dabc","type":"BasicTicker"}},"id":"46aec47f-9a3a-402c-93e1-57811affd530","type":"Grid"},{"attributes":{"callback":null},"id":"9bab5699-b778-4ee8-bb6b-f697094ac868","type":"DataRange1d"},{"attributes":{},"id":"fd55afbe-b2e7-495c-bd12-42e5dfe19265","type":"BasicTicker"},{"attributes":{"formatter":{"id":"cf06fa4e-5b05-43ee-8919-531b294c6e9d","type":"BasicTickFormatter"},"plot":{"id":"db87ecc2-6a14-4918-8652-950dbffe9177","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd55afbe-b2e7-495c-bd12-42e5dfe19265","type":"BasicTicker"}},"id":"b19b7ddf-f7aa-4fc6-bae6-99a0de613af1","type":"LinearAxis"},{"attributes":{},"id":"0dd7c656-64b3-418b-86b5-98c983e8b475","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9a4963a0-375f-49d0-8ff4-99b43b8bdbdf","type":"TapTool"}]},"id":"9d436c5e-cda0-4210-a389-3f0f085cf0c7","type":"Toolbar"},{"attributes":{"plot":{"id":"db87ecc2-6a14-4918-8652-950dbffe9177","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd55afbe-b2e7-495c-bd12-42e5dfe19265","type":"BasicTicker"}},"id":"47fa3379-57fd-41ed-9847-c06c4e6fc374","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","color","x"],"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"0732964f-998d-4335-be43-42c9cca38e83","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"b19b7ddf-f7aa-4fc6-bae6-99a0de613af1","type":"LinearAxis"}],"left":[{"id":"12d259aa-b269-4009-9148-9b2f92b921a2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b19b7ddf-f7aa-4fc6-bae6-99a0de613af1","type":"LinearAxis"},{"id":"47fa3379-57fd-41ed-9847-c06c4e6fc374","type":"Grid"},{"id":"12d259aa-b269-4009-9148-9b2f92b921a2","type":"LinearAxis"},{"id":"46aec47f-9a3a-402c-93e1-57811affd530","type":"Grid"},{"id":"454cf97e-4b79-473c-b44f-d54f4a56ed69","type":"GlyphRenderer"}],"title":{"id":"c0cbb862-3496-4ecc-b981-05c13033be36","type":"Title"},"tool_events":{"id":"ea84b9aa-d514-4f18-83cb-185ad55e7bf4","type":"ToolEvents"},"toolbar":{"id":"9d436c5e-cda0-4210-a389-3f0f085cf0c7","type":"Toolbar"},"x_range":{"id":"77051750-e703-4d0c-8cf2-f5bfd759990b","type":"DataRange1d"},"x_scale":{"id":"6307bf96-9b16-4c10-96c5-293830cb8d57","type":"LinearScale"},"y_range":{"id":"9bab5699-b778-4ee8-bb6b-f697094ac868","type":"DataRange1d"},"y_scale":{"id":"0dd7c656-64b3-418b-86b5-98c983e8b475","type":"LinearScale"}},"id":"db87ecc2-6a14-4918-8652-950dbffe9177","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"cf06fa4e-5b05-43ee-8919-531b294c6e9d","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Click the Dots"},"id":"c0cbb862-3496-4ecc-b981-05c13033be36","type":"Title"},{"attributes":{"callback":{"id":"6f2d1c97-0a2d-46f9-a794-31d772259dc9","type":"OpenURL"},"plot":{"id":"db87ecc2-6a14-4918-8652-950dbffe9177","subtype":"Figure","type":"Plot"}},"id":"9a4963a0-375f-49d0-8ff4-99b43b8bdbdf","type":"TapTool"},{"attributes":{"formatter":{"id":"ed17f4bc-573d-42c9-a24c-49a1de3d300e","type":"BasicTickFormatter"},"plot":{"id":"db87ecc2-6a14-4918-8652-950dbffe9177","subtype":"Figure","type":"Plot"},"ticker":{"id":"ccd0c594-abbf-4a66-87d1-a0bc57c1dabc","type":"BasicTicker"}},"id":"12d259aa-b269-4009-9148-9b2f92b921a2","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1fd0bb17-3cf9-4656-95a7-9a99bad1b2e7","type":"Circle"},{"attributes":{},"id":"ea84b9aa-d514-4f18-83cb-185ad55e7bf4","type":"ToolEvents"}],"root_ids":["db87ecc2-6a14-4918-8652-950dbffe9177"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"512d9f09-9e99-408c-8e89-8ec88727f5bd","elementid":"cb8ebd72-0b91-4f28-bf53-8eef0fd98b15","modelid":"db87ecc2-6a14-4918-8652-950dbffe9177"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
