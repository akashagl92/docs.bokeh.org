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
      };var element = document.getElementById("44bdceca-0018-451d-84b5-123e0708e7b2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '44bdceca-0018-451d-84b5-123e0708e7b2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"a79ed46e-c03e-477d-a039-6f15d5f3aa0b":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"14473b53-fde9-4f19-8f30-8a1d4143b15c","type":"Toolbar"},{"attributes":{},"id":"ec31878e-fc67-402e-81ff-baad77eaa72e","type":"MultiLine"},{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]}},"id":"94583061-46bd-41f6-9b5e-1b20147faef4","type":"ColumnDataSource"},{"attributes":{},"id":"7cf46818-f45d-4bd3-9e16-fdf481990c92","type":"LinearScale"},{"attributes":{"data_source":{"id":"94583061-46bd-41f6-9b5e-1b20147faef4","type":"ColumnDataSource"},"glyph":{"id":"ec31878e-fc67-402e-81ff-baad77eaa72e","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"55df14a2-c1d7-4cc9-ab5f-0dd6de644353","type":"CDSView"}},"id":"7559a8e4-9fc0-4d9f-86de-af3cf713654a","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5363084c-1765-45da-bc88-920a4e6000db","type":"Range1d"},{"attributes":{"source":{"id":"94583061-46bd-41f6-9b5e-1b20147faef4","type":"ColumnDataSource"}},"id":"55df14a2-c1d7-4cc9-ab5f-0dd6de644353","type":"CDSView"},{"attributes":{},"id":"a81a1c13-ccb2-4726-a575-d531d15601f8","type":"BasicTicker"},{"attributes":{"graph_layout":{"0":[0.018330258965154833,-0.26666106478537743],"1":[0.6716110981343215,-0.19590051120077567],"10":[-0.7732806097379872,-0.4753253723346452],"11":[0.4496316548775574,-0.9135658658985065],"12":[-0.2889689734726134,-0.7287525094249547],"13":[0.43510103675450806,-0.21335908317367636],"14":[0.7715622885139111,0.6944735395979436],"15":[0.5249563927536873,0.9434357415368568],"16":[-1.0,0.41518703334739904],"17":[0.7749222831044036,0.0736330281320019],"18":[0.04241117000826278,0.9645150194908716],"19":[0.5570002551701894,0.10635362500064383],"2":[0.2246969320202883,-0.13167047791308883],"20":[0.2785051801263796,1.0],"21":[0.9204657051018796,-0.33841901632068105],"22":[0.8531290018456912,0.37805190423540935],"23":[-0.1442232170030483,0.06888103504863308],"24":[-0.27793432727799383,-1.0],"25":[-0.12642191950490023,-0.7945297231608393],"26":[-0.3248474825746549,0.91993930902206],"27":[-0.24075389486841392,-0.32686912880608976],"28":[0.516264555819629,-0.370197775118693],"29":[-0.20356528015188768,0.6720875180783961],"3":[0.3048617677388452,-0.6439388328883191],"30":[0.6219946890633339,0.46639685778536055],"31":[0.100350234469605,-0.37086496275267333],"32":[0.29591676022470725,0.512625789724916],"33":[0.222235924713021,0.3579959952638814],"4":[-0.7613629501016002,-0.27363354082188285],"5":[-0.8675862694234167,-0.06859950570275763],"6":[-0.7937898575546696,0.10653343351798883],"7":[0.624536711077015,-0.5861610248184552],"8":[0.0739428061282501,0.3191897664583421],"9":[-0.3301681131507026,0.12241469891261647]}},"id":"e40b8d16-3db9-4be0-898f-fce5d234a558","type":"StaticLayoutProvider"},{"attributes":{},"id":"54def282-2f58-45d3-afc9-227b3d4d9d6a","type":"LinearScale"},{"attributes":{},"id":"3b1f988f-ea10-4c52-b7d7-cfb7af2b3992","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"bb299aa0-8ee9-46ab-a9ba-4c48f0a30369","subtype":"Figure","type":"Plot"},"ticker":{"id":"a81a1c13-ccb2-4726-a575-d531d15601f8","type":"BasicTicker"}},"id":"ce316a50-d93c-4734-a404-08ce47e0b50d","type":"Grid"},{"attributes":{"formatter":{"id":"3b1f988f-ea10-4c52-b7d7-cfb7af2b3992","type":"BasicTickFormatter"},"plot":{"id":"bb299aa0-8ee9-46ab-a9ba-4c48f0a30369","subtype":"Figure","type":"Plot"},"ticker":{"id":"a81a1c13-ccb2-4726-a575-d531d15601f8","type":"BasicTicker"}},"id":"08e776dc-cdb7-4736-979a-4c55b1525903","type":"LinearAxis"},{"attributes":{},"id":"ae59d874-387b-4c1b-a644-8548bb505bd8","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ae59d874-387b-4c1b-a644-8548bb505bd8","type":"BasicTickFormatter"},"plot":{"id":"bb299aa0-8ee9-46ab-a9ba-4c48f0a30369","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ad59fdc-e785-40fc-98f4-134e2b1f8314","type":"BasicTicker"}},"id":"8c6bb51e-0da2-40ad-9122-aaa73dba1786","type":"LinearAxis"},{"attributes":{},"id":"72c31782-b163-4050-b6f0-ddd324038db2","type":"NodesOnly"},{"attributes":{},"id":"2ad59fdc-e785-40fc-98f4-134e2b1f8314","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"bb299aa0-8ee9-46ab-a9ba-4c48f0a30369","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ad59fdc-e785-40fc-98f4-134e2b1f8314","type":"BasicTicker"}},"id":"3f07a6c0-d724-4968-8bef-88885c6c1431","type":"Grid"},{"attributes":{"below":[{"id":"08e776dc-cdb7-4736-979a-4c55b1525903","type":"LinearAxis"}],"left":[{"id":"8c6bb51e-0da2-40ad-9122-aaa73dba1786","type":"LinearAxis"}],"renderers":[{"id":"08e776dc-cdb7-4736-979a-4c55b1525903","type":"LinearAxis"},{"id":"ce316a50-d93c-4734-a404-08ce47e0b50d","type":"Grid"},{"id":"8c6bb51e-0da2-40ad-9122-aaa73dba1786","type":"LinearAxis"},{"id":"3f07a6c0-d724-4968-8bef-88885c6c1431","type":"Grid"},{"id":"ba6fad43-27f4-4bad-a35c-86ad3aa0e09f","type":"GraphRenderer"}],"title":{"id":"ff543ee0-67fb-4ef7-b16f-09858263b672","type":"Title"},"toolbar":{"id":"14473b53-fde9-4f19-8f30-8a1d4143b15c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"17170297-c8a1-4f6b-8024-5779978e023e","type":"Range1d"},"x_scale":{"id":"7cf46818-f45d-4bd3-9e16-fdf481990c92","type":"LinearScale"},"y_range":{"id":"5363084c-1765-45da-bc88-920a4e6000db","type":"Range1d"},"y_scale":{"id":"54def282-2f58-45d3-afc9-227b3d4d9d6a","type":"LinearScale"}},"id":"bb299aa0-8ee9-46ab-a9ba-4c48f0a30369","subtype":"Figure","type":"Plot"},{"attributes":{"edge_renderer":{"id":"7559a8e4-9fc0-4d9f-86de-af3cf713654a","type":"GlyphRenderer"},"inspection_policy":{"id":"72c31782-b163-4050-b6f0-ddd324038db2","type":"NodesOnly"},"layout_provider":{"id":"e40b8d16-3db9-4be0-898f-fce5d234a558","type":"StaticLayoutProvider"},"node_renderer":{"id":"ab283592-3af0-4d33-8252-bb3d36b70725","type":"GlyphRenderer"},"selection_policy":{"id":"f87da5bd-5e1d-411f-bfc4-ffc39015a111","type":"NodesOnly"}},"id":"ba6fad43-27f4-4bad-a35c-86ad3aa0e09f","type":"GraphRenderer"},{"attributes":{},"id":"d51f4947-a04a-4afa-be05-1f8049b87d74","type":"Circle"},{"attributes":{"callback":null,"column_names":["index"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]}},"id":"c6e8daf4-376d-45b5-b707-e7605f57c8a3","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Networkx Integration Demonstration"},"id":"ff543ee0-67fb-4ef7-b16f-09858263b672","type":"Title"},{"attributes":{},"id":"f87da5bd-5e1d-411f-bfc4-ffc39015a111","type":"NodesOnly"},{"attributes":{"data_source":{"id":"c6e8daf4-376d-45b5-b707-e7605f57c8a3","type":"ColumnDataSource"},"glyph":{"id":"d51f4947-a04a-4afa-be05-1f8049b87d74","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"752d9da2-6b97-48e7-977b-641265a8b366","type":"CDSView"}},"id":"ab283592-3af0-4d33-8252-bb3d36b70725","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"17170297-c8a1-4f6b-8024-5779978e023e","type":"Range1d"},{"attributes":{"source":{"id":"c6e8daf4-376d-45b5-b707-e7605f57c8a3","type":"ColumnDataSource"}},"id":"752d9da2-6b97-48e7-977b-641265a8b366","type":"CDSView"}],"root_ids":["bb299aa0-8ee9-46ab-a9ba-4c48f0a30369"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"a79ed46e-c03e-477d-a039-6f15d5f3aa0b","elementid":"44bdceca-0018-451d-84b5-123e0708e7b2","modelid":"bb299aa0-8ee9-46ab-a9ba-4c48f0a30369"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
