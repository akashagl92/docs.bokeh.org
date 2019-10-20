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
      };var element = document.getElementById("2977541c-6092-40bc-83ec-f40aeb2c1480");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2977541c-6092-40bc-83ec-f40aeb2c1480' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"088a924b-e61b-4386-bff6-938073822358":{"roots":{"references":[{"attributes":{"ticker":{"id":"3958","type":"BasicTicker"},"visible":false},"id":"3961","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3976","type":"HexTile"},{"attributes":{"formatter":{"id":"3989","type":"BasicTickFormatter"},"ticker":{"id":"3963","type":"BasicTicker"}},"id":"3962","type":"LinearAxis"},{"attributes":{},"id":"3963","type":"BasicTicker"},{"attributes":{},"id":"3991","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"3994","type":"Selection"},"selection_policy":{"id":"3995","type":"UnionRenderers"}},"id":"3980","type":"ColumnDataSource"},{"attributes":{},"id":"3989","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3967","type":"WheelZoomTool"},{"id":"3968","type":"ResetTool"},{"id":"3985","type":"HoverTool"}]},"id":"3969","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"3963","type":"BasicTicker"},"visible":false},"id":"3966","type":"Grid"},{"attributes":{},"id":"3992","type":"Selection"},{"attributes":{},"id":"3953","type":"LinearScale"},{"attributes":{},"id":"3967","type":"WheelZoomTool"},{"attributes":{},"id":"3955","type":"LinearScale"},{"attributes":{"data_source":{"id":"3973","type":"ColumnDataSource"},"glyph":{"id":"3975","type":"HexTile"},"hover_glyph":{"id":"3977","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"3976","type":"HexTile"},"selection_glyph":null,"view":{"id":"3979","type":"CDSView"}},"id":"3978","type":"GlyphRenderer"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"3978","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"3985","type":"HoverTool"},{"attributes":{},"id":"3968","type":"ResetTool"},{"attributes":{},"id":"3994","type":"Selection"},{"attributes":{},"id":"3958","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3991","type":"BasicTickFormatter"},"ticker":{"id":"3958","type":"BasicTicker"}},"id":"3957","type":"LinearAxis"},{"attributes":{"source":{"id":"3973","type":"ColumnDataSource"}},"id":"3979","type":"CDSView"},{"attributes":{},"id":"3993","type":"UnionRenderers"},{"attributes":{"text":"Hexbin for 500 points"},"id":"3947","type":"Title"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3981","type":"Circle"},{"attributes":{"callback":null},"id":"3949","type":"DataRange1d"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"3972","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3975","type":"HexTile"},{"attributes":{"source":{"id":"3980","type":"ColumnDataSource"}},"id":"3984","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3982","type":"Circle"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"3957","type":"LinearAxis"}],"center":[{"id":"3961","type":"Grid"},{"id":"3966","type":"Grid"}],"left":[{"id":"3962","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"3978","type":"GlyphRenderer"},{"id":"3983","type":"GlyphRenderer"}],"title":{"id":"3947","type":"Title"},"toolbar":{"id":"3969","type":"Toolbar"},"x_range":{"id":"3949","type":"DataRange1d"},"x_scale":{"id":"3953","type":"LinearScale"},"y_range":{"id":"3951","type":"DataRange1d"},"y_scale":{"id":"3955","type":"LinearScale"}},"id":"3946","subtype":"Figure","type":"Plot"},{"attributes":{"high":15,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"3972","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"3980","type":"ColumnDataSource"},"glyph":{"id":"3981","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3982","type":"Circle"},"selection_glyph":null,"view":{"id":"3984","type":"CDSView"}},"id":"3983","type":"GlyphRenderer"},{"attributes":{},"id":"3995","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"3951","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3977","type":"HexTile"},{"attributes":{"callback":null,"data":{"c":[1,3,1,1,1,1,2,2,1,3,1,1,1,1,1,1,5,2,1,2,1,1,1,3,2,3,2,6,4,2,1,1,1,1,1,3,3,6,4,7,10,8,9,4,3,1,2,4,9,5,15,5,7,3,4,1,3,2,10,6,13,10,5,5,2,1,2,4,9,1,11,13,12,7,3,5,1,10,15,12,14,11,8,2,2,1,2,4,5,5,9,6,3,3,2,1,1,2,3,9,5,7,6,3,4,2,1,3,2,7,2,2,2,2,1,3,1,2,1,3,2,1,1,1,1,1,1,1,1,1],"q":[-4,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,10,10,10,11,11,12,12,14],"r":[3,2,3,-4,-3,-1,0,1,2,3,4,-5,-4,-3,-2,-1,0,1,2,3,4,6,7,-5,-3,-2,-1,0,1,2,3,4,5,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-6,-5,-4,-3,-2,-1,0,1,2,-10,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,0,1,2,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,-9,-8,-7,-6,-5,-4,-3,-2,-1,-9,-8,-7,-6,-5,-4,-2,-9,-7,-6,-8,-4,-8,-7,-11]},"selected":{"id":"3992","type":"Selection"},"selection_policy":{"id":"3993","type":"UnionRenderers"}},"id":"3973","type":"ColumnDataSource"}],"root_ids":["3946"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"088a924b-e61b-4386-bff6-938073822358","roots":{"3946":"2977541c-6092-40bc-83ec-f40aeb2c1480"}}];
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
        function(Bokeh) {
        
        
        }
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