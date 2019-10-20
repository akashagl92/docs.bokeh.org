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
      };var element = document.getElementById("b9d86432-e321-4ddd-972c-1ea1261a537b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9d86432-e321-4ddd-972c-1ea1261a537b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"a0e833f5-a210-49aa-ab6b-2e63f5829bc1":{"roots":{"references":[{"attributes":{"source":{"id":"4967","type":"ColumnDataSource"}},"id":"4969","type":"CDSView"},{"attributes":{"edge_renderer":{"id":"4968","type":"GlyphRenderer"},"inspection_policy":{"id":"4981","type":"NodesOnly"},"layout_provider":{"id":"4970","type":"StaticLayoutProvider"},"node_renderer":{"id":"4964","type":"GlyphRenderer"},"selection_policy":{"id":"4980","type":"NodesOnly"}},"id":"4961","type":"GraphRenderer"},{"attributes":{},"id":"4981","type":"NodesOnly"},{"attributes":{},"id":"4974","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"4963","type":"ColumnDataSource"}},"id":"4965","type":"CDSView"},{"attributes":{},"id":"4986","type":"UnionRenderers"},{"attributes":{},"id":"4966","type":"MultiLine"},{"attributes":{},"id":"4946","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"4958","type":"Toolbar"},{"attributes":{"formatter":{"id":"4974","type":"BasicTickFormatter"},"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4949","type":"BasicTicker"}},"id":"4948","type":"LinearAxis"},{"attributes":{},"id":"4988","type":"UnionRenderers"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4940","type":"Range1d"},{"attributes":{"plot":null,"text":"Networkx Integration Demonstration"},"id":"4937","type":"Title"},{"attributes":{},"id":"4944","type":"LinearScale"},{"attributes":{"data_source":{"id":"4963","type":"ColumnDataSource"},"glyph":{"id":"4962","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4965","type":"CDSView"}},"id":"4964","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4942","type":"Range1d"},{"attributes":{},"id":"4949","type":"BasicTicker"},{"attributes":{},"id":"4987","type":"Selection"},{"attributes":{},"id":"4962","type":"Circle"},{"attributes":{},"id":"4980","type":"NodesOnly"},{"attributes":{"data_source":{"id":"4967","type":"ColumnDataSource"},"glyph":{"id":"4966","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4969","type":"CDSView"}},"id":"4968","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4949","type":"BasicTicker"}},"id":"4952","type":"Grid"},{"attributes":{},"id":"4989","type":"Selection"},{"attributes":{"below":[{"id":"4948","type":"LinearAxis"}],"left":[{"id":"4953","type":"LinearAxis"}],"renderers":[{"id":"4948","type":"LinearAxis"},{"id":"4952","type":"Grid"},{"id":"4953","type":"LinearAxis"},{"id":"4957","type":"Grid"},{"id":"4961","type":"GraphRenderer"}],"title":{"id":"4937","type":"Title"},"toolbar":{"id":"4958","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4940","type":"Range1d"},"x_scale":{"id":"4944","type":"LinearScale"},"y_range":{"id":"4942","type":"Range1d"},"y_scale":{"id":"4946","type":"LinearScale"}},"id":"4938","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"4972","type":"BasicTickFormatter"},"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4954","type":"BasicTicker"}},"id":"4953","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"4987","type":"Selection"},"selection_policy":{"id":"4986","type":"UnionRenderers"}},"id":"4967","type":"ColumnDataSource"},{"attributes":{},"id":"4972","type":"BasicTickFormatter"},{"attributes":{},"id":"4954","type":"BasicTicker"},{"attributes":{"graph_layout":{"0":[-0.7839536452173409,0.5044106452930036],"1":[-0.5364368770422919,0.13379941411480661],"10":[-1.5369592925525777,0.9851876284417089],"11":[-1.7725450042972832,0.48916089035033644],"12":[-0.5754835861671701,1.1257093912714822],"13":[-0.1256590588830985,0.13247629683967857],"14":[1.2462986427374525,0.241677937161737],"15":[1.6098936064822695,-0.16347070442008632],"16":[-1.7446959626518057,2.0],"17":[-1.2642226466180735,0.30796314891164056],"18":[1.2822602623176087,-0.9733534734439567],"19":[0.03423547324679879,0.3848689428683531],"2":[-0.06552378433487721,-0.1938987703787824],"20":[1.4678077416640771,0.0679378167739979],"21":[-1.2562556518701815,-0.030466722263338086],"22":[1.5329533001982905,-0.4261868648149213],"23":[0.8702683984662742,-1.0540682235557728],"24":[-0.07196851666626558,-1.4603906215874687],"25":[0.31489633049325244,-1.4946074991992333],"26":[1.7789611432092889,-0.7536646120313135],"27":[0.33548188678180746,-1.0148487872063707],"28":[0.21808075794345477,-0.7418802877480337],"29":[1.370256557408028,-0.7699148441116895],"3":[-0.4691790201552106,0.47219055139239546],"30":[0.39851878404681634,-0.03663151739977682],"31":[0.02772410381421673,-0.6155748126329504],"32":[0.9289347931196279,-0.3225787375785319],"33":[0.8009715898417024,-0.36467583436478873],"4":[-1.2186478800094707,1.1689868679125748],"5":[-1.5269340444283457,1.362104615988365],"6":[-1.2701809225118599,1.5103824528914196],"7":[-0.7650567864731085,-0.0049825787680331975],"8":[0.27287497204232314,0.15693431889531],"9":[0.4932843360656748,-0.6225960276017632]}},"id":"4970","type":"StaticLayoutProvider"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"4989","type":"Selection"},"selection_policy":{"id":"4988","type":"UnionRenderers"}},"id":"4963","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4954","type":"BasicTicker"}},"id":"4957","type":"Grid"}],"root_ids":["4938"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"a0e833f5-a210-49aa-ab6b-2e63f5829bc1","roots":{"4938":"b9d86432-e321-4ddd-972c-1ea1261a537b"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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