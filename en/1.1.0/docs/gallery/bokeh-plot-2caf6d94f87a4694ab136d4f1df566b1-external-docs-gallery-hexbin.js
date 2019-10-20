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
      };var element = document.getElementById("e1e69439-d618-47f5-a996-60ff8d5dc1cc");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e1e69439-d618-47f5-a996-60ff8d5dc1cc' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"d087b5a1-d9ba-4333-ad59-79176a610bd6":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3967","type":"WheelZoomTool"},{"id":"3968","type":"ResetTool"},{"id":"3985","type":"HoverTool"}]},"id":"3969","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"2sTvq76+4D/KR24x3wsBQBqhGB+UWvU/CfguqrodCkADrrlrXpEQQDpXADyEMBxAtRUJB1h7C0AclO3bwLTrPxaLnaPra+A/o3OmJoIaBkC0zcEcGfrmP/wYYa3LROy/CPM69YVM479UEd1e3/P9P9Jvz/6O/wVA3sH/SpEGCUCgE6ypb767v3DQD/KJb9I/3b1uPgUPFkBG06fQRdr4P+AR8KqBb7K/RPZNAggi8z/MkqshgFUYQJTe1V6SeCBAsPMEGsAg5z8495lGv9wQQBaqEi4YoP4/FNpHFNCpFEDA7Xgxtiemv+aqo47O0g9Ar9hJKkRzAEDlRlq7tlIDQAFLTus4lglAvTpEKq2H9D/um09GpejhPzBG0Ye0Us8/gGaNgFJT0j8Wl8/MgEASQEDpjH4nN/Y/5Ck3Hp5K+D8Ukb9+rnrvP3iGPfD6mOk/gFc8xG+hEECeF+qXLZPwPwSHS2ieGuk/9xhVQQNrCUC0f94NqesJQK5T6PM/3ARAgswNiauOEECkMOBcZJn6P7bYbmCDgu4/Jm7CD3dADUDanrLQJyz3PwuMzssOiwNAGrtD+c7CEkAAkT75mZNwP4Jenr6E8/8/oNzjkCdQzj/wmojby34RQM9jo6g81AFA/D8o1so4AcBigKbolMMAQKMb2rUwtQBAMNbqz5BoC0BQ/gwq/SoHQPQzJOkFnQ1A3430GL4cD0AADB+UHEacv7BHUndWQABAy1Exvrx1BkB8SB8G7KntP0GuVd1KnQZAgjMRLnFSDEAfmU5r9L4EQPPSbJdHWwFAprYEXOnUCEBEolx1jZfSPyAIAloQ2+y/ALPutNPMEUD0lo55d9PWP0Dg5B1UgAFA++RZF/paDEAYd+oIl8kBQMBUdbb+46k/zsXAL4C/9b8u4l1a/qgEQFjIUv0RmtO/wAAivt8U0z8DiOeZrQkJQDAJL9CbNQBAgd5U4lSb8D9MSuEJ2SHdPynAzTpSAQtAXC1vA8HH/T/Nta6mDWEKQH7GZa7G0RBATNm8AW0F+D+3H/pmnr4CQH06fkVMT/4/LPF6TOAMDEBwXS7UvmDfvwBHUkA5qY+/4LFFzSSv6D/l2fBBIJP5P2gAiqyi5/E/wOp9HX4p9z/YyfO4OznzPyZ/09kUcwFAWoKU3/XGB0A03vtbBWMIQFROBjQfNwhAojVit7lN9D/F90fNKcMAQKIsQECVVgVAoiHDPgcK9r9+L83vNIETQKKRMl26cwdAjvr0ch/u8T/Q8L9ehCMRQEaSt1uiiAZAqH5wv3lA6z9qDkfXX2MJQGY5XtmyG+U/1FLSUqe7+z9AUX8wyBjYP+xKFl4TLghAy04J468DA0BQYGRr1hT7v6cLadIIS/w/gC6+Ymq7pD+fdISw3hMAQGhN6MPYvMI/T6MhywfKBEAoCjv1CMHZv3Thnpbl2glAQmd2NJkME0CQPts8wbnqvzSN8666MPG/XMI1ki2W+L8WGXqEU4bzv7zEGRTVR/4/QnFk0g5K5z/CbWRrKDsRQHI43Hdb2fK/DmGttFyvEEC4qUtNKFzSP4qN5fr7qvA/qKN+6joD5z/ERlpSAicIwICDqF/iWZE/8PHAlxCvCUBC6lGI9Fr4P1pghWnjXvw/lCO1J8j5EUBgKqR/S14KQCLPGbHgmQlAfI+C8WjmA0BwxwqAao7jPyyf42HUO+e/JEgNaXp/0T96zhrKLW33PxjXwsH2zAZAoh/LDn2kEkDdqbgReE0AQJgpbwifcA5A6Ha1BQJkDkBA7fbEIaYQQJfeqJGDABRA1lH0jgBfFkC1ig9CiIoJQB3TBcWiSPc/pg4clLKT+L/Mg+GuWaHlP5BNCHSrSL4/ebOHWGy5DUBIJV07N5X6PwGiaSSjevI/Zsh5w5s29z+SB+JB+KoHwDhlWvbK5uA/krCY+qxKDkBeftQGdpXnPwA8JMwN+YG/tdsdcXb68j+AgxJhlAsNQGpb/1p5rP0/65ff/Nv8BkCD5MSg3mr7P4ZwWtuk3wRAGHGMocPi/z+ogpm0wv/rP6xTzDifpPY/pHVhSufUCkCc9iupaSECQIi5/SElf+E/CKVWyO9B/L9FLJcE1DsVQB57N2GJkfQ/3rKkRj5b/z92i59AeiTxP3zH7/FaduC/qk0sYSBxDUA4uFaJkpIWQNf2CeIZnfo/Gin8CW8y8j/QGYASmbUNQNoOwJ81BQZACdRaJrpWBkBEnRBJvPcWQJYxw9Xag+c/Tc4ORwtNA0B4sD9l+PcIQPr9Tp27Qg5A2DBWhK6n279MSCzZqWraP2ztFSE1FQZAaEFE8S4w6T91gqHBS6EYQDryO5oYvhFAUmKxTEQnEEBwPUTpjKjHPyi68EgN2hFAh4vkCM9FBEC9jXGkYG0NQDCp8ZCfwfk/UM9Oh4bOBEDBJHaU8azyP245zdsfdxJAn5Wsixg1FkC2mBgnXF0AQKEvYq8LawZAPmjant+W4D9X4WKLJ0QIQEzddY37whFAAGh9KHQiYD+G1EVjIiEQQIAMpVO/7Lq/rMCapLihEECUr8QklMrkPxKr8YOehfY/8tgAVa4wGUCqxFy86qj+P57d9AjzdwpAfUzIIC2MCUDsklwBztcMQHz39gbUlAxAnPAL2sUN2j8sB94TiYPfP23Z3Cewav4/+ca+gm0bHEBuHIOC/dvhP+3cjpfjY/c/iJx9Fk3W2L8ck1XXwaACQD/mLqn3Wg5AtAiWmTA0/j9fxXHeKWX1P0inwaSxYwZAH9DPzlPyCkCT+x03CiAGQIJaoz/VXBJA3uQFpXIeCkB4NKRDVuYFQP7OwSwSegpA2DbVHpxt178IjyisZs3dP5J8yy/jGOs/Xa+SkV+eCkCcLF4+CW3zP9m/WvkfORBA/ovUg7i6+j8wRQA8c3rQvybz04fI9ek/3KPiNK+02D9gA8krHSXiP/i4tUt+Ie8/GO0C0/6WCkCY+zZna4rXv2pFM30FVw1ASMTa+EJDwj8oWCnW/Gz1v1V+qi/Oqfg/YFPZVgeDwr8e+QewxyLlP6jWoZNcKwpA5vzHP5hoFECQyoM1dAr1v+li8i276/8/qIOBkrjr4T+tEAlLRaMFQDyH+EmHBAJAPAgkKQKG4r9AlJGwUXi5PwzbII+6jfc/mL5pVd8d7D/zJbX+U0nzP/gFMwyZGeK/owwnyFOwDEDrvs+FMiMMQAvZ0/TUjxBAVaAPULZTB0A+fHPFjBv0Px0ZmxGiUgVA9HEkH60k6z8MUhRYDrr8v90tP1l78gVACNwXe9WDAkAaxmtSF2wFwAyN9XXYIAVAfqvQuHxZCEBorMmDMnQCQDof3LeezvU/7NlXK8Cr7T/gqR8P7lSwv8Oc4ufAz/8/Ahj+HBay5j/AfXsWL+ysvxqF9HG8yf0/AxY8JzTQ8T84yI9xGTMTQEiuZoQ1fA9AOFN6lDK2/T/Sv4WRW5YWQABy0RUDJ6y/zaOVRAKr/T/2TGvpHGDuP++uEOxi0vY//86CtkOU8D85DCUSrdz/P5CY62tNnNA/CP+A287mBEA01BGilEUAQDjK29tS2Pw/fEmH6snr/T+WOcfl6WgEQDnm5hOi1gRAYRg5RbAx/D+mogZDcloVQPC3hxqz1/Q/RLYNIMRBCkCwZ7b/fYAFQBRucFFkRglAWMSbOSFE0D+j24XL44T9P6PLRJcouwBA6A4XIVrt3j8w5nRq9ePMv9BZPKzddxxAlruFbvbH9D9f6fiPc6sNQKhgHr2KcME/dD/5AQLw7z8RU619knUTQDuWXWnotgRAJNb9p9KeA0CO1C6YAY4KQOMIW2yOoAxA/lbBwFAZEkB84s5nXen6P/T9bZL0FBFALJAB2EHD7j9S1uvCk3cFQFjWMLhXRg1AJ39XjtPjEUCxUNZY03gVQJZQMRbExwxAwaaKkniTBUBEOjTvPx3UP7hL9GK8fsI/GC0H9CLU1b/4y0W18CH2P7yvGhQWutE/c+nT5Kdb+D+H6tXyNlQFQNQ9qjOEkgJAM+KwLDYi/j/48th5vRLsv0AjyYty2ba/c2mQNQuREEBgiPG+AwjQP4hUyqUgwcE/2WNH1VLtD0ATwujVy5L+P9YAYs6LegdAFxYnb5jPAECgK+LL95v8PzyE8GLPYv4/DzVGG+N09T/QMd9MF9MFQOIur0mJ0xRAGINusqqf2j9SAwkSooACQHwKXFSARPY/QIkagBqD2L+gAM+TdxqoP0QK/QEY7u2/5oQmVZeM4D8G7q3KHGMUQMq/V83ioOo/HQrtvN5LAkDwIsgS8AcPQLDEIhowdsq/3qL4R+UaAUA/QTpAODUBQMmTKNxRthhAuG69M2YCEUBVQ1CvRvgXQMwt8f+5QPg/KFsJpMmMCkCelgtaVWcGQLBSC9oTvBFA3O/XbbGs/T/SNUoS3/QTQF4VsbTRxiBAwH1e7oEApL/0wEjF1RgOQPhJEEHkkgjAsfCYPHFm+j8lrc3OdGoVQGY9MixSAPs/Qd2KChamCUBLjeGeQEACQG7NpbeFtxNAwD3F8xwl9D+OXAAtbDH4P7wdH/HzRRVAYneO3YB8DkBUQN9iOVPVP7DlNHDsUBJAtEgB+Zxc8D/YOq1u+0/oP+LPg3j1DRJAxoHRiNNhCEAg08Jm18rVPwCaTWiDXwZApWTIyFMfBkC9y1t9gx4EQDBfASX04AtAUOzrtbCeE0AspZFu/xkEQCjJELE2Pf4/ZvFD0EAyCUD23Il09aH/P5C7LbJ9LgRA5w4hv0nZ9T8gm854nH74Pz0510VezAVAqG57fDWNDEAeLRWyEq4VQJ76A0v5dxNADIqwT5cEAkBSrBzn7MwRQBR+1p0AVOw/hJMEWFZiA0Cc/zz9ZVX7P8KAXVYL7OY//uhgHyZk+b88Zt0h8KPrv94rjTaD+wtADnGYcKDf9D9ABx2PB5nkvwvwfhvJFRBAnDAOkpuc/z+Yyc0tJnzZv9/+L+QOrxHAQK1NzdG1rL84TpPvsJ/0vzxbQrtdCAJA4zLRkmksEUCd1o+uAJ8FQO4PiGPPqxJAEDistKoQ0D8AxKOiBKGdvyhfS94eEwNAjCaaW1zLC0DaBoQLr6MQQOvljI6oHPY/DEjc03vy47+b/jf5IE/5P4on4eOBWfc/QFAOe9PH8D/Epbbi99bnPwp3+UqiG/Q/tVl7N3zj/D/4VdQOgkwAQABLqLoGKAlAZLESJlYk7D+pNCZ1aHIWQPAzaj3rjcc/rqG5WO8ZC0DaGIFLS9UUQGarcJ9MqeA/Rt7oH5vACkBm/AavoVMHQOSqGrbeuBFA62NmK8tp+T/kD8eIzvXtP6k1RMN48RdAtJhzf8lDAkCZv8ZRapQKQA==","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"3995","type":"Selection"},"selection_policy":{"id":"3994","type":"UnionRenderers"}},"id":"3980","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3980","type":"ColumnDataSource"}},"id":"3984","type":"CDSView"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3981","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3982","type":"Circle"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"3957","type":"LinearAxis"}],"center":[{"id":"3961","type":"Grid"},{"id":"3966","type":"Grid"}],"left":[{"id":"3962","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"3978","type":"GlyphRenderer"},{"id":"3983","type":"GlyphRenderer"}],"title":{"id":"3947","type":"Title"},"toolbar":{"id":"3969","type":"Toolbar"},"x_range":{"id":"3949","type":"DataRange1d"},"x_scale":{"id":"3953","type":"LinearScale"},"y_range":{"id":"3951","type":"DataRange1d"},"y_scale":{"id":"3955","type":"LinearScale"}},"id":"3946","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"3972","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3975","type":"HexTile"},{"attributes":{"ticker":{"id":"3958","type":"BasicTicker"},"visible":false},"id":"3961","type":"Grid"},{"attributes":{"high":16,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"3972","type":"LinearColorMapper"},{"attributes":{},"id":"3995","type":"Selection"},{"attributes":{"data_source":{"id":"3973","type":"ColumnDataSource"},"glyph":{"id":"3975","type":"HexTile"},"hover_glyph":{"id":"3977","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"3976","type":"HexTile"},"selection_glyph":null,"view":{"id":"3979","type":"CDSView"}},"id":"3978","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"3951","type":"DataRange1d"},{"attributes":{},"id":"3991","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3980","type":"ColumnDataSource"},"glyph":{"id":"3981","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3982","type":"Circle"},"selection_glyph":null,"view":{"id":"3984","type":"CDSView"}},"id":"3983","type":"GlyphRenderer"},{"attributes":{},"id":"3953","type":"LinearScale"},{"attributes":{"formatter":{"id":"3989","type":"BasicTickFormatter"},"ticker":{"id":"3963","type":"BasicTicker"}},"id":"3962","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"c":[1,1,1,1,2,1,2,1,3,1,2,1,2,1,1,1,3,2,8,6,7,4,1,2,1,1,2,1,8,7,8,8,4,1,1,2,3,8,14,12,8,10,4,3,1,1,2,1,12,3,14,11,13,9,3,1,1,8,12,7,9,14,16,4,6,1,1,1,1,6,8,8,11,10,8,8,5,4,1,1,4,3,6,10,9,10,3,8,1,2,1,8,3,3,5,5,2,3,1,1,1,2,1,3,3,2,1,2,1,1,2,1,1,1,2,1,1,1,1,1],"q":[-6,-4,-4,-3,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11],"r":[1,0,4,1,-3,0,1,4,-1,0,1,2,3,4,-5,-4,-3,-2,-1,0,1,2,3,4,-8,-6,-5,-4,-3,-2,-1,0,1,2,5,-6,-5,-4,-3,-2,-1,0,1,2,5,-8,-7,-6,-5,-4,-3,-2,-1,0,1,3,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-10,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-9,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-1,-9,-8,-6,-5,1,-10,-7,-6,-4,-3,-8,-3]},"selected":{"id":"3993","type":"Selection"},"selection_policy":{"id":"3992","type":"UnionRenderers"}},"id":"3973","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"3991","type":"BasicTickFormatter"},"ticker":{"id":"3958","type":"BasicTicker"}},"id":"3957","type":"LinearAxis"},{"attributes":{"source":{"id":"3973","type":"ColumnDataSource"}},"id":"3979","type":"CDSView"},{"attributes":{},"id":"3967","type":"WheelZoomTool"},{"attributes":{},"id":"3958","type":"BasicTicker"},{"attributes":{},"id":"3992","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3977","type":"HexTile"},{"attributes":{"dimension":1,"ticker":{"id":"3963","type":"BasicTicker"},"visible":false},"id":"3966","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3976","type":"HexTile"},{"attributes":{},"id":"3993","type":"Selection"},{"attributes":{},"id":"3955","type":"LinearScale"},{"attributes":{},"id":"3963","type":"BasicTicker"},{"attributes":{},"id":"3968","type":"ResetTool"},{"attributes":{"callback":null},"id":"3949","type":"DataRange1d"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"3978","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"3985","type":"HoverTool"},{"attributes":{},"id":"3994","type":"UnionRenderers"},{"attributes":{"text":"Hexbin for 500 points"},"id":"3947","type":"Title"},{"attributes":{},"id":"3989","type":"BasicTickFormatter"}],"root_ids":["3946"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"d087b5a1-d9ba-4333-ad59-79176a610bd6","roots":{"3946":"e1e69439-d618-47f5-a996-60ff8d5dc1cc"}}];
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