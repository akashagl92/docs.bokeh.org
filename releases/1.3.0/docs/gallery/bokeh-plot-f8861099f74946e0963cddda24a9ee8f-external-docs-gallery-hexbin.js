(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("c53a9ced-734c-4778-8f38-4ad5532afb84");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c53a9ced-734c-4778-8f38-4ad5532afb84' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"7c95112c-8d9c-4426-8c94-d2694b230b27":{"roots":{"references":[{"attributes":{"fill_color":{"field":"c","transform":{"id":"3972","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3975","type":"HexTile"},{"attributes":{"formatter":{"id":"3991","type":"BasicTickFormatter"},"ticker":{"id":"3963","type":"BasicTicker"}},"id":"3962","type":"LinearAxis"},{"attributes":{"callback":null},"id":"3949","type":"DataRange1d"},{"attributes":{},"id":"3989","type":"BasicTickFormatter"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"3978","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"3985","type":"HoverTool"},{"attributes":{},"id":"3993","type":"Selection"},{"attributes":{},"id":"3968","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"3963","type":"BasicTicker"},"visible":false},"id":"3966","type":"Grid"},{"attributes":{"data_source":{"id":"3980","type":"ColumnDataSource"},"glyph":{"id":"3981","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3982","type":"Circle"},"selection_glyph":null,"view":{"id":"3984","type":"CDSView"}},"id":"3983","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3973","type":"ColumnDataSource"},"glyph":{"id":"3975","type":"HexTile"},"hover_glyph":{"id":"3977","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"3976","type":"HexTile"},"selection_glyph":null,"view":{"id":"3979","type":"CDSView"}},"id":"3978","type":"GlyphRenderer"},{"attributes":{},"id":"3963","type":"BasicTicker"},{"attributes":{},"id":"3992","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3977","type":"HexTile"},{"attributes":{},"id":"3967","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"3957","type":"LinearAxis"}],"center":[{"id":"3961","type":"Grid"},{"id":"3966","type":"Grid"}],"left":[{"id":"3962","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"3978","type":"GlyphRenderer"},{"id":"3983","type":"GlyphRenderer"}],"title":{"id":"3947","type":"Title"},"toolbar":{"id":"3969","type":"Toolbar"},"x_range":{"id":"3949","type":"DataRange1d"},"x_scale":{"id":"3953","type":"LinearScale"},"y_range":{"id":"3951","type":"DataRange1d"},"y_scale":{"id":"3955","type":"LinearScale"}},"id":"3946","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"c":[1,1,1,1,1,3,1,2,1,1,3,2,2,2,2,2,3,4,1,5,4,1,1,2,1,5,6,6,12,8,4,4,1,4,5,10,9,13,8,9,6,3,1,1,1,2,7,7,7,6,13,14,8,7,2,1,1,1,1,2,3,9,14,18,14,7,18,1,1,2,5,4,8,7,9,6,4,3,1,1,2,1,2,3,11,6,11,6,3,1,1,1,5,6,6,8,4,7,2,2,3,3,6,1,2,3,1,3,1,2,1,2,1,1,1,1,1,1],"q":[-6,-4,-3,-3,-3,-2,-2,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,11],"r":[3,1,-2,0,2,1,3,-4,-3,-1,0,2,3,4,-5,-4,-3,-2,-1,0,2,3,5,-6,-5,-4,-3,-2,-1,0,1,2,6,-6,-5,-4,-3,-2,-1,0,1,2,3,5,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-9,-7,-6,-5,-4,-3,-2,-1,0,4,-8,-7,-6,-5,-4,-3,-2,-1,1,-8,-7,-5,-4,-3,-2,-1,-9,-8,-7,-5,-4,-2,-7,-5,-4,-3,-8]},"selected":{"id":"3993","type":"Selection"},"selection_policy":{"id":"3992","type":"UnionRenderers"}},"id":"3973","type":"ColumnDataSource"},{"attributes":{},"id":"3994","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3967","type":"WheelZoomTool"},{"id":"3968","type":"ResetTool"},{"id":"3985","type":"HoverTool"}]},"id":"3969","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3982","type":"Circle"},{"attributes":{"formatter":{"id":"3989","type":"BasicTickFormatter"},"ticker":{"id":"3958","type":"BasicTicker"}},"id":"3957","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3976","type":"HexTile"},{"attributes":{},"id":"3995","type":"Selection"},{"attributes":{"callback":null},"id":"3951","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"3995","type":"Selection"},"selection_policy":{"id":"3994","type":"UnionRenderers"}},"id":"3980","type":"ColumnDataSource"},{"attributes":{},"id":"3991","type":"BasicTickFormatter"},{"attributes":{},"id":"3958","type":"BasicTicker"},{"attributes":{},"id":"3953","type":"LinearScale"},{"attributes":{"high":18,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"3972","type":"LinearColorMapper"},{"attributes":{},"id":"3955","type":"LinearScale"},{"attributes":{"source":{"id":"3973","type":"ColumnDataSource"}},"id":"3979","type":"CDSView"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3981","type":"Circle"},{"attributes":{"ticker":{"id":"3958","type":"BasicTicker"},"visible":false},"id":"3961","type":"Grid"},{"attributes":{"text":"Hexbin for 500 points"},"id":"3947","type":"Title"},{"attributes":{"source":{"id":"3980","type":"ColumnDataSource"}},"id":"3984","type":"CDSView"}],"root_ids":["3946"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"7c95112c-8d9c-4426-8c94-d2694b230b27","roots":{"3946":"c53a9ced-734c-4778-8f38-4ad5532afb84"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();